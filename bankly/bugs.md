1. routes/users - patch - had requireAdmin() middleware that kept users from editing their own profile. - removed requireAdmin() because login route ensured own user or admin later in the route.

2. routes/users/:username should return 404 if user isn't found but just returns empty json. There was no test present for this. - models/user/get(username) was missing the "throw" in the error so it wasn't actually throwing the error and just continuing to return the the empty user.

3. In routes/auth/login(post) there was no await before `User.authenticate(username, password)` Because this made `user` undefined, when the token was created using `user.admin` it was always making the token with `admin: false` regardless of the actual admin status for that user.

4. /routes/users - get - returns too much information - should only return username, firstname, lastname. Test only confirms that three users are returned but doesn't verify information itself.

5. routes/users - patch - allows changing variables other than firstName, lastName, phone, email. Added jsonSchema and validation.

6. In routes/users - patch - The docstring for patch says to return everything but it is unnecessary and potentially dangerous to be return even a hashed password. Changed the sql query from returning all to returning everything but the password.