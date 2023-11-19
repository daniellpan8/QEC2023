import pandas as pd
import numpy as np
import scipy as sp
import matplotlib.pyplot as plt

from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn import svm
from sklearn import model_selection
from sklearn.metrics import accuracy_score


class LungSimple():

    def __init__(self):
        # Getting the dataset
        file = "datasets/lung_cancer_simple.csv"
        df = pd.read_csv(file)
        df["GENDER"] = np.where(df["GENDER"] == "M", 0, 1)

        # Partitioning
        X = np.array(df.drop(columns=["LUNG_CANCER"]))
        y = np.array(df["LUNG_CANCER"])
        X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size=0.3)

        self.clf = svm.SVC(kernel='linear')
        self.clf.fit(X_train, y_train)
        # y_pred = clf.predict(X_test)

    def predict(self, gender, age, smoking, yel_fing,
                anxiety, press, chronic, fatigue,
                allergy, wheezing, alcohol, cough,
                shortbreath, swallowing, chestpain):

        pred = self.clf.predict(np.array([
            gender, age, smoking, yel_fing,
            anxiety, press, chronic, fatigue,
            allergy, wheezing, alcohol, cough,
            shortbreath, swallowing, chestpain
            ]).reshape(1, -1))

        return pred
