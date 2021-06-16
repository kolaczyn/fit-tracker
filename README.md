# Fit Tracker

## TODOS

- Calculator components are not technically dumb presententional components, because they do contain some logic, so I should move them to another file
- Add explanations for ActivityLevels
- Start using object as an argument instead of positional arguments for `calculate*` functions
- refactor checking if user is male logic into a `useMale` hook
- highlight current active link in the Navbar
- there are rounded corner on the input box's right side, I might be using the components a little bit incorrect
- add redirection to tabs in `/calculator`, e.g. `/calculator/tdee` redirects to TDEE Calculator tab
- for some reason modal's overlay doesn't cover the navbar and the footer
- add validation "sanity test" validation login on calories: i.e. if user put 20 Calories and 10g of fat, then it clearly doesn't add up (20 << 10*9). There should be a message saying that the user may be icorrect, it the error passes a certain threshold. It's worth to keep in mind that user may also just want to track calories, so he puts fat,carbs, protein as 0, even though Calories is somethingl like 400
- add indicators saying if e.g. your BMI is okay, give explanation what does BMI and TDEE mean and their uses cases, give instructions on how you should measure yourself
- make the logo a link to the home page
- rename the site into **Track** *Fit* ('Track' is bold, 'Fit' is think)
