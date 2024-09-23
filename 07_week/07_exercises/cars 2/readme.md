# Refactoring Car application

7. **Refactor `Car` Class to Include Year:**

   - Add a new property `year` to the `Car` class to represent the year the car was manufactured.
   - Modify the HTML form to include an additional field where the user can input the car's year.
   - Update the form submission handler to collect the `year` value and pass it when creating a new `Car` object.

8. **Error Handling for Input Validation:**

   - Add error handling to ensure that all required fields (license plate, maker, model, current owner, price, color, and year) are provided by the user.
   - Ensure that the `year` is a valid number and falls within a reasonable range (e.g., between 1886—the year the first car was made—and the current year).
   - If invalid data is entered, display an error message on the screen and prevent the car from being added to the list.

     **Example checks:**
     - License plate must not be empty.
     - Price must be a positive number.
     - Year must be a number between 1886 and the current year.

9. **Discount based on car year:**

   - Implement a feature that calculates a discount based on the car's age. Cars that are older than 10 years should receive a 15% discount on their price.
   - Update the car display table to show the original price and the discounted price (if applicable).
   - Make sure to handle cases where the discount does not apply (i.e., cars that are less than 10 years old) and display the regular price.

10. **Refactor Search function for Year-Based discount:**

   - Update the search function to also display the discounted price (if applicable) when a car is found based on the license plate.
   - If the car is older than 10 years, the search result should show both the original price and the discounted price.

11. **Additional error handling for searching:**

   - Ensure that the search input is validated before attempting to find the car. For instance, the license plate should not be an empty string or contain invalid characters.
   - If an invalid search input is provided, display an appropriate error message and do not proceed with the search.
   - Handle cases where the car with the given license plate is not found and ensure the user is notified clearly.
