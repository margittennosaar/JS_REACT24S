# Cars - Step 3

Store Car Data
- After adding a car to the list, ensure the car data is stored in LocalStorage. This will allow the car list to persist between page reloads.
  - Use localStorage.setItem() to store the cars array in LocalStorage as a JSON string.
- Update on Add/Delete: Ensure that whenever a car is added or deleted, LocalStorage is updated to reflect the current list of cars.
- Form Reset: After successfully adding a car, reset the form inputs and notify the user that the car has been added.
- When the page loads, retrieve any stored car data from LocalStorage.
  - Use localStorage.getItem() to retrieve the stored data and parse it back into an array using JSON.parse().
  - Repopulate the Car List: Once the car data is loaded from LocalStorage, repopulate the cars array in your application and update the display to show all the saved cars in the table.
  - Handle Empty LocalStorage: If no cars are stored in LocalStorage, ensure the application starts with an empty car list without errors.

- Delete Car Functionality: Add a delete button for each car in the list. When clicked, the button should:
  - Remove the car from both the cars array and LocalStorage.
  - Dynamically update the table to remove the deleted car.
  - Update LocalStorage: After deleting a car, ensure the updated cars array is saved in LocalStorage using localStorage.setItem().

- Enhanced Feedback: Provide clear feedback for the user when actions like adding or deleting a car occur.
  For example:
  - Display a success message when a car is successfully added.
  - Show a confirmation message when a car is deleted.

- Form Improvements: Refine the form design to improve user experience and ensure it’s easy to use on both desktop and mobile devices.
- Table Display: Ensure the car table is responsive, clean, and displays the relevant car information clearly.

## Finalisation of the project

### Acceptance Criteria

The project will be considered complete when the following criteria are met:

#### Functionality

- The user can add a car through a form and the data is stored in LocalStorage.
- The user can view the list of cars in a table, and the data persists across page reloads.
- The user can search for a car by license plate and view the details of the found car.
- The user can delete a car from the list, and the car is removed from both the UI and LocalStorage.

#### User Interface

- The application has a clean and modern design with consistent styling.
- Forms and buttons are visually appealing, with proper spacing, alignment, and validation feedback.
- The table is styled for readability, with alternating row colors and proper column spacing.
- The layout is responsive and adapts to different screen sizes, providing a good user experience on both desktop and mobile devices.

#### User Experience

- Error handling is in place for invalid inputs, with clear and user-friendly error messages.
- The interface is intuitive, with clear labels, buttons, and actions.
- Users receive feedback when performing actions (e.g., adding, searching, and deleting cars).
- The form resets after submission, improving user flow and preventing duplicate entries.
