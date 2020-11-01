# cvi-tool
*CVI Therapy* is a tool to help children with CVI (cortical visual impairment).

## Create an environment
* Verify that conda is installed and check the version number using `conda info`. Update conda to the most current version using `conda update conda`.
* Create a new environment called `flaskenv` and install Python 3.7 by running `conda create --name flaskenv python=3.7`. 
* To use `flaskenv`, activate it using `activate flaskenv` on Windows or `source activate flaskenv` on macOS or Linux. You can deactivate the environment by running `deactivate` on Windows or `source deactivate` on macOS or Linux.

## Run on Flask
* Install Flask using `pip install Flask`. 
* To tell your terminal the application to work with, export the `FLASK_APP` environment variable by running export `export FLASK_APP=cvi.py`. On Windows, the environment variable syntax depends on command line interpreter. On Command Prompt, run `set FLASK_APP=cvi.py`.
* Run the application using `flask run`. This launches a simple built-in server.
* Head over to [http://127.0.0.1:5000/](http://127.0.0.1:5000/), where you should see the application running.

