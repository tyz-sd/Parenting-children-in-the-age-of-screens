# Web Dashboard

This dashboard is written in [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

All of the project files in this directory are mainly default template files which were generated using `create-next-app`. The files of interest that were written by the group are `pages/index.tsx` and all of the files in `python_server`.



## Running the Project

Install `node_modules` by calling `npm i` or `yarn`  

Run `yarn dev` on one terminal to start the frontend. It will be hosted on `http://localhost:3000/`  

Now, open a separate terminal and `pip install` the packages `flask` and `flask_cors`  

Using that separate terminal, go into the `python_server` directory and run `python app.py` to start the backend server for model prediction  

