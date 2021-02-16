# LoanAdvisor
Machine learning-based intelligent web app to predict loan default as a way of assisting loan administrators in related decision making. 
---LoanAdvisor/ Data Mining Model for Predicting Loan Default---

This guide explains how loanvisor.py file (in the decision tree induction model folder) is expected to be executed: decision tree induction model/loanvisor.py

1. The dataset can be downloaded from the link provided in line 12 of the loanvisor.py script.

 
2. loanvisor.py is created in Spyder Python interpreter, but can be executed in any python interpreter.
   It is a procedural code. This implies that it is to be executed line-by-line because of the sequential dependencies of the codes.
   Chunks of lines of code are delineated by the comments can be run collectively.

   If the code is to be run in a Jupyter notebook, each chunk of code, separated by the comments, could be in each cell of the Jupyter notebook.

3. The dataset used in this study, SBAnational.csv, must be in the same directory as the loanvisor.py, or appropriate path (to be) specified in line 21 of the python script.


4. The webapp folder contains html, css and JavaScript files, and a model.py file. The index.html and form.html files give a clue of how the predictive system would work. 
(Note: data fields in the form.html are dummy and not model-driven)


4. All the contents of the webapp are expected to be in the same folder to accurate rendering of the the pages.


5. This is still work in progress: The future plan is to have the prediction model, after being thoroughly finetuned, deployed in the cloud, like AWS EC2 instance
   and have a real feel of having predictive model in the production codebase.
