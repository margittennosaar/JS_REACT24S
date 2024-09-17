# Second Step: Add customer information and delivery options

**Objective:** Enhance the Pancake Maker by including customer details and delivery options to complete the ordering process. This step will involve adding JavaScript functionality to handle new input fields and further refine the user experience. 

Your task is to write the JavaScript code that:

1. **Captures customer information:**
   - Include an input field for the customer’s name. Ensure that this input is captured and stored correctly.
   
2. **Implements delivery method options:**
   - Add a set of radio buttons to choose the delivery method:
     - **Eat In**
     - **Pick Up**
     - **Delivery** (Note: selecting this option adds an additional $5 to the total order cost)
   - Listen for changes to the radio button selection and update the total order price accordingly.

3. **Updates the total price dynamically:**
   - Adjust the existing price calculation to account for the delivery charge if the "Delivery" option is selected.
   - Ensure the updated price is displayed dynamically in the `#totalPrice` span.

4. **Displays the current order with selected choices:**
   - Implement a button labeled "See Order" that, when clicked, displays a summary of the current selections including:
     - Customer Name
     - Selected Pancake Type, Toppings, and Extras
     - Chosen Delivery Method
     - Total Price (including any delivery charges)

5. **Stores orders in an array:**
   - Maintain an array to store each order. This array should include:
     - The customer’s name
     - Selected pancake details
     - Chosen delivery method
     - Total cost
   - Ensure that any changes or edits to the order update the corresponding entry in the array.
