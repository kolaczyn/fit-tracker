# Fit Tracker

## TODOS

- Calculator components are not technically dumb presententional components, because they do contain some logic, so I should move them to another file
- I'm getting annoyed with the long component names like `BodyFatCalculatorForMenComponent` - do something about it
- Use Redux for tracking user's weight, height, so they don't have to fill in the same information many times over
- Use radio button to pick gender instead of tabs, because then I can track it, so if the user opens another calculator, they have the gender preselected
- Start using naming convention like `calculateTdee` instead of `calculateTDEE`
- Add explanations for ActivityLevels
- Start using object as an argument instead of positional arguments for `calculate*` functions