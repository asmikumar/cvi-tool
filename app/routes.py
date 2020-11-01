# app.py
import numpy as np
import pandas as pd
import json
from flask import Flask, jsonify, request, render_template
from app import app

# no caching
from flask import make_response
from functools import wraps, update_wrapper
from datetime import datetime

def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Last-Modified'] = datetime.now()
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '-1'
        return response
    return update_wrapper(no_cache, view)

session_count = 0
@app.route('/session', methods=['GET', 'POST'])
def get_session_count():
    global session_count
    if request.method == 'POST':
        session_count += 1
    return str(session_count)

data_list = []
@app.route('/data', methods=['GET', 'POST'])
def get_data():  
    if request.method == 'POST':
        request_dict = dict(request.get_json(force=True))
        request_dict['session'] = session_count
        data_list.append(request_dict)
    data_df = pd.DataFrame(data_list, columns=['x', 'y', 'type', 'session'])
    data_df['session'] = data_df['session'].astype(int)
    #print(data_df)
    #print(data_df.shape)
    data_df_json = jsonify(data_df.to_dict())
    return data_df_json

@app.route('/progress', methods=['GET', 'POST']) # scores and recommendations
def display_progress():

    def get_score(data_df): # all sessions
        path_df = data_df.loc[data_df['type'] == 'path']
        gaze_df = data_df.loc[data_df['type'] == 'path'] # change to 'gaze'
        path_df_json = jsonify(path_df.to_dict())
        gaze_df_json = jsonify(gaze_df.to_dict())
        if path_df.shape != gaze_df.shape:
            score = "Different number of data points for path and gaze."
        else:
            # calculate Euclidean distance dataframe
            path_df = path_df.rename(columns={'x': 'x_path', 'y': 'y_path', 'session': 'session_path'})
            concat_df = gaze_df.rename(columns={'x': 'x_gaze', 'y': 'y_gaze', 'session': 'session_gaze'})
            concat_df = pd.concat([path_df, concat_df], axis=1)
            x_path, y_path, x_gaze, y_gaze = concat_df['x_path'], concat_df['y_path'], concat_df['x_gaze'], concat_df['y_gaze']
            concat_df['distance'] = np.sqrt(np.square(x_path - x_gaze) + np.square(y_path - y_gaze))
            # calculate percentage of hits (within 150-pixel radius)
            concat_df['hit'] = concat_df['distance'] <= 150
            results_df = concat_df.groupby(['session_path']).agg({'hit': 'sum'}) # 'session_path' and 'session_gaze' interchangeable
            results_df_pcts = results_df.groupby(level=0).apply(lambda x: 100 * x / float(x.sum()))
            print(results_df_pcts)
            score = results_df_pcts.iloc[-1]['hit'] # score on last session
        return score

    data_json = get_data()
    data_df = pd.DataFrame.from_dict(data_json.get_json()) 
    last_score = get_score(data_df)
    print('score:', last_score)
    message = {'Score for previous session': last_score}
    return jsonify(message)

@app.route('/', methods=['GET', 'POST'])
def display_site():
    return render_template('index.html')

@app.route('/get_started', methods=['GET', 'POST'])
def display_get_started():
    return render_template('get_started.html')

@app.route('/index', methods=['GET', 'POST'])
def display_index():
    return render_template('index.html')

@app.route('/index_content.html', methods=['GET', 'POST'])
def display_index_content():
    return render_template('index_content.html')

@app.route('/calibration', methods=['GET', 'POST'])
@nocache
def display_calibration():
    return render_template('calibration.html')

@app.route('/calibration_content.html', methods=['GET', 'POST'])
@nocache
def display_calibration_content():
    return render_template('calibration_content.html')

@app.route('/customize', methods=['GET', 'POST'])
def display_customize():
    return render_template('customize.html')

@app.route('/recommended', methods=['GET', 'POST'])
def display_recommended():
    return render_template('recommended.html')

@app.route('/dashboard', methods=['GET', 'POST'])
def display_dashboard():
    return render_template('dashboard.html')

@app.route('/logout', methods=['GET', 'POST'])
def display_logout():
    return render_template('logout.html')

@app.route('/login', methods=['GET', 'POST'])
def display_login():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def display_register():
    return render_template('register.html')

@app.route('/forgot-password', methods=['GET', 'POST'])
def display_forgot_password():
    return render_template('forgot-password.html')

@app.route('/cvi_app', methods=['GET', 'POST'])
def display_cvi_app():
    return render_template('cvi_app.html')

if __name__ == '__main__':
    app.run() # use with flask run
    # app.run(ssl_context='adhoc') # use with flask run --cert=adhoc
