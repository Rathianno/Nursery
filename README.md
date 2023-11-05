Story	Description

As a:	Administrator/Developer (BackEnd Developer)
I want to:	Store accounts with the Id, userName, email, description, firstName, lastName, ETC.
So that:	I can easily access the users information.


Task description: This story needs the design and implementation of a system to store user accounts with specific attributes, 
including Id, userName, email, description, firstName, lastName, etc.

Requirements Satisfied:
- Store user accounts with specific attributes.
- Ensure easy accessibility of user information.

Design Elements: 
- Database planning to accomodate the information
- Backend API endpoints for editing and accessing accounts.

  Difference Listing:

  Unit test cases:[ongoing, still in development]

Test Case: Create User Account
Input: Id, userName, email, description, firstName, lastName, etc.
Expected Output: User account is successfully created in the system.

Test Case: Retrieve User Information
Input: User Id
Expected Output: User information (Id, userName, email, description, firstName, lastName, etc.) is retrieved correctly.

Test Case: Update User Account
Input: User Id, Updated attributes (e.g., email, description)
Expected Output: User account is successfully updated with the provided information.

Test Case: Delete User Account
Input: User Id
Expected Output: User account is successfully deleted from the system.

Test Case: Invalid Input for User Creation
Input: Incomplete user information (e.g., missing email or firstName)
Expected Output: Error message indicating the missing information.
