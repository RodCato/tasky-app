# README

* Ruby version
3.1.3


* This is the beginning of a To-Do list style app using Ruby on Rails, TailwindCSS, Postgresql, and Stimulus with Turbo Frames. During the creation of this app I have learned more about Ruby on Rails, TailwindCss and Stimulus. 

I am hoping to take what I learned from in this project to my next project which will be similar but have user authentication and authorization.

8/26 - As of today got the code working correctly but without Turbo Frames. Still gotta troubleshoot/figure out the "content missing" error with turbo frames.

8/27 - Added Due Date for tasks but noticed that when the check boxes are checked and the page is refreshed the checks disappear. Need to trouble shoot the completion part of the tasks.

8/28 - Added a new column to the tasks table called completed. This will be a boolean value that will be set to false by default. When the checkbox is checked it will set the value to true. This will allow the checks to stay checked when the page is refreshed.

8/29 - Added a new column to the tasks table called due_date. This will be a date value that will be set to nil by default. When the due date is selected it will set the value to the date selected. This will allow the due date to stay selected when the page is refreshed.