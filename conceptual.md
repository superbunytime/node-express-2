### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  
  JWT is a string containing a header, payload, and signature, used to store signed and validated data

- What is the signature portion of the JWT?  What does it do?
  
  The signature is dedicated to a specific header and payload. It performs its algorithm in the header.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  
  Yes.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  
  Make the request with username/password. On success, server returns a token that is encoded and signed with standard JWT. Front-end receives and stores the token via local storage. For every future request the browser sends this token to the server.

- Compare and contrast unit, integration and end-to-end tests.
  
  End-to-end testing will test an app from start to end. This will simulate a real user's interaction as they flow through the app.

  Integration testing is the practice of merging in small bits of code and if the tests fail reject the code

  Unit testing is the practice of testing individual small bits of code such as the way a specific function works

- What is a mock? What are some things you would mock?
  
  Creating a fake version of external or internal service that can stand in for the real on. This helps your tests run more efficiently and reliably. This is commonly used in unit testing. An object under test may have dependencies on other (complex) objects To isolate the behavior, you replace other objects by mocks that simulate their behavior This is useful if the real objects are impractical to incorporate into the unit test.

- What is continuous integration?
  
  Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?
  
  An environment variable is a variable whose value is set outside the program. Typically built into the operating system. Made up of a name/value pair and any number may be created and available for reference at a point in time.

- What is TDD? What are some benefits and drawbacks?

  Test Driven Development is a testing process in which you write the tests prior to writing the code. Once the tests are written you will write the code for the app. This allows for a well thought out app that is written with tests in mind first. But this process will generally take a longer time to complete.

- What is the value of using JSONSchema for validation?

  Allows for user data to fail fast before bad data is able to reach the db, reduces the amount of code for processing and validating data, and gets a validating system that is easy to setup and maintain.

- What are some ways to decide which code to test?

  Test checkpoints that a user will experience on a trip through the app. Test for multiple outcomes with said user experience. Ensure that the app is working as intended.

- What does `RETURNING` do in SQL? When would you use it?

  RETURNING will return the data that was inserted, updated, or deleted in SQL.

- What are some differences between Web Sockets and HTTP?

  HTTP is a heavy protocol and is stateless. Ask for answer, get answer, hang up connection.

  Websockets are tiny and stateful often used to tell the browser something has changed. They stay connected.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Express without a second thought; both are useful tools, and both have proven difficult, but working with flask is what stopped me dead in my tracks on the bootcamp; its environment setup is assinine to the point where just thinking about it kind of makes me see red, and once I have enough experience with other frameworks under my belt, I fully intend to omit my flask experience from my resume, for fear of winding up working a job where I have to deal with that waking nightmare of a framework on a semi-regular basis.

  The setup, dependencies, environment, everything about flask has been so painful, that the ease of writing python was completely overshadowed by the sheer volume of emotional damage incurred from having to work with it.

  I will need genuine therapy for my experiences with flask, whereas express I just regard with mild confusion and discomfort most of the time.