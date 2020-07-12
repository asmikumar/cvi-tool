# app.py
import numpy as np
import pandas as pd
import json

from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

# @app.route('/hello', methods=['GET', 'POST'])
# def hello():

#     # POST request
#     if request.method == 'POST':
#         print('Incoming...')
#         print(request.get_json(force=True)) # parse as JSON
#         return 'OK', 200

#     # GET request
#     else:
#         message = {'greeting':'Hello from Flask!'}
#         return jsonify(message) # serialize and use JSON headers

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
    return render_template('cvi.html')

