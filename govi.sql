CREATE DATABASE Govi;
USE Govi;

CREATE TABLE users(
       user_id INT PRIMARY KEY AUTO_INCREMENT,
       first_name VARCHAR(100) NOT NULL,
       last_name  VARCHAR(100) NOT NULL,
       email VARCHAR(250) NOT NULL,
       role ENUM('students','teacher','staff') NOT NULL,
);

CREATE TABLE students(
       user_id INT,
       roll_no  INT PRIMARY  KEY AUTO_INCREMENT,
       student_name VARCHAR(400),
       subject_opt ENUM('fullstack development','data science','UI/UX') NOT NULL,
       nationality VARCHAR(150),
       fees_payment_methord ENUM('Full',"3 months",'6 months','12 months') NOT NULL,
       batch ENUM('week end','weekdays') NOT NULL,
       FOREIGN KEY (user_id) REFERENCES users(user_id)
 )

 CREATE TABLE teacher(
       user_id INT 
       teacher_name VARCHAR(400),
       handilling_subject ENUM('fullstack development','data science','UI/UX') NOT NULL,
       nationality VARCHAR(150),
       salary INT NOT NULL,
       working_hours INT NOT NULL,
       no_of_students_handilling INT,
       FOREIGN KEY (user_id) REFERENCES users(user_id)
 )

CREATE TABLE staff(
      staff_name VARCHAR(400),
      roll VARCHAR(700),
      nationality VARCHAR(150),
      salary INT NOT NULL,
      working_hours INT NOT NULL,
)

CREATE TABLE placement(
      roll_no INT,
      student_name VARCHAR(400),
      placement_status ENUM('plced','not placed') NOT NULL,
      salary_package INT,
      FOREIGN KEY (roll_no) REFERENCES students(roll_no)
)