# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Since the cohort model has_many students, that means the students model belongs_to the cohort model. So the students model will have the foreign key that correlates with the primary keys of cohort. We will want to add a foreign key column to students labeled 'cohort_id'. The association will only work by naming the foreign key with the model name following by '_id'. We can add the foreign key by using generating a migration. Once we generate a migration, we can go to the newly created file and add a column by using some built-in syntax in the method. 

This is the following syntax: add_column, :table_name, :column_name, :datatype

We would write : add_column, :student, :cohort_id, :integer 

Researched answer: To set up the relationship, we will need to add a foreign key column to the Students table that references the Cohorts table. This foreign key column will be named cohort_id. To add the foreign key column to the Students table, you can create a new migration file by running the command rails generate migration.

2. Which RESTful routes must always be passed params? Why?

Your answer: SHOW, EDIT, and DELETE must be passed params that route us to the instance of the database that we want to interact with. Without an ID to route us, we will not be returned any information; thus not be able to perform an action.

Researched answer: There is no RESTful route that always requires parameters to be passed. However, certain routes may require parameters based on the specific functionality that they provide. Routes used for searching, filtering, and routing to a specific instance typically require a params.

3. Name three rails generator commands. What is created by each?

Your answer:
$rails g Model = This generates a new model to hold data with specified columns and datatypes.

$rails g Controller = This generates a new controller that allows us to define and perform CRUD actions.

$rails g migration = This generates a new migration database that allows us to modify information in our schema file. We can perform CRUD actions on our models.

Researched answer:
$rails g mailer = This generates a new mailer class and templates to send emails from an application. It has methods that can compose and send emails.

$rails g integration_test = This generates a test that can test the application. It can test user interactions such as submitting forms and clicking buttons.

$rails g scaffold - This generates a full set of files and code for a resource. It is similar to $rails g resource.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- Routes us to the 'index.html.erb' view. We will be able to view all the data in students

action: "POST" location: /students
- Allows us to perform a CREATE action that will make a new instance of the database and assign an 'id', thus making a new URL route.

action: "GET" location: /students/new
- Routes us to 'new.html.erb' that allows us to perform a POST action. 

action: "GET" location: /students/2
- Routes us to the students database with an instance that has a primary id of '2'. This will give us a view of a page.

action: "GET" location: /students/2/edit
- Routes us to an instance of students with id '2'. This is a view and will allow us to perform a PATCH action.

action: "PATCH" location: /students/2
- This is an update action that will allow us to edit/update the instance of students with id '2'.

action: "DELETE" location: /students/2
- This is a delete action that will allow us to delete an instance of students with id '2'.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to be able to create an account with a username and password.

2. As a user, I want to have a unique username that isn't being used.

3. As a user, I want to be able to have a search bar to search for specific posts.

4. As a user, I want to be able to like, comment, and reply on posts.

5. As a user, I want to be able to create my own posts.

6. As a user, I want to be able to edit my own posts.

7. As a user, I want to be able to delete my own posts.

8. As a user, I want to be able to see how many views my posts have.

9. As a user, I want to have all interactions be notified to me via email.

10. As a user, I want mine and other users content to be visually aesthetic and easily accesible.
