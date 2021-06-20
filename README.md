# Fit Tracker

## TODOS

- Add explanations for ActivityLevels
- refactor checking if user is male logic into a `useMale` hook
- add redirection to tabs in `/calculator`, e.g. `/calculator/tdee` redirects to TDEE Calculator tab
- add validation "sanity test" validation login on calories: i.e. if user put 20 Calories and 10g of fat, then it clearly doesn't add up (20 << 10\*9). There should be a message saying that the user may be icorrect, it the error passes a certain threshold. It's worth to keep in mind that user may also just want to track calories, so he puts fat,carbs, protein as 0, even though Calories is somethingl like 400
- add indicators saying if e.g. your BMI is okay, give explanation what does BMI and TDEE mean and their uses cases, give instructions on how you should measure yourself
- for some reason I can't put floats in the input
- make it possible to add e.g. % at the end in SubmitAndResult
- form logic is a little bit repetetive, there might be a better way to handle the form logic
- add goals - e.g. 2000 Calories, 100g of protein per day, show progress bar, show it red it the user went orderboard, etc
- show "progres" of the intake of the day on the side bar, hide it on mobile, also add seperate page of the "progress" and add only show link to "progress" page in the navbar. this way both desktop and mobile users get a better experience
- if a form is partilally filled it (e.g. add food) send an alert asking user if he's sure, and he'll loose progress
- color scheme issue is still not resolved, but it's likely it's because of `textColor` and `bg` attributes that I've added
- you can use imperial or metric units
- I'm using teal ghost buttons all over the place, I should put it in a AppButton component or something like this
- for some reason, I can't get a button with an icon, because of [some weirdness](https://github.com/chakra-ui/chakra-ui/issues/683).The workaround I came up with doesn't really give a feedback if the icon is "hovered" **Solution - use IconButton**
- convert `<ColorSchemeSwitch>` into `<IconButton>`
- make dark mode the default theme
- add fancy slide in of the content on page load
- finish the *remember-user's-measurements-across-calculators* feature
- find some way to utilize the horizontal space on desktop, maybe latest stats?
- start with empty gender, so the user is forced to select the correct gender
- read the docs for NextSeo and use some of its features
- start using classes, use constructors setting values to 0, etc in the `models/` directory
- make a utility for Formik, there's a lot of `number().require().min(0)` in here
- currently the food category is optional, so it shouldn't show up in the food item component. It might be a good idea to 'randomize' the color scheme of the category chip