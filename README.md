# Fit Tracker

## TODOS

- refactor checking if user is male logic into a `useMale` hook
- add validation "sanity test" validation login on calories: i.e. if user put 20 Calories and 10g of fat, then it clearly doesn't add up (20 << 10\*9). There should be a message saying that the user may be icorrect, it the error passes a certain threshold. It's worth to keep in mind that user may also just want to track calories, so he puts fat,carbs, protein as 0, even though Calories is somethingl like 400
- make it possible to add e.g. % at the end in SubmitAndResult
- form logic is a little bit repetetive, there might be a better way to handle the form logic
- you can use imperial or metric units
- I'm using teal ghost buttons all over the place, I should put it in a AppButton component or something like this
- for some reason, I can't get a button with an icon, because of [some weirdness](https://github.com/chakra-ui/chakra-ui/issues/683).The workaround I came up with doesn't really give a feedback if the icon is "hovered" **Solution - use IconButton**
- convert `<ColorSchemeSwitch>` into `<IconButton>`
- make dark mode the default theme
- finish the *remember-user's-measurements-across-calculators* feature
- read the docs for NextSeo and use some of its features
- start using classes, use constructors setting values to 0, etc in the `models/` directory
- make a utility for Formik, there's a lot of `number().require().min(0)` in here
- currently the food category is optional, so it shouldn't show up in the food item component. It might be a good idea to 'randomize' the color scheme of the category chip
- the sidebar moves in TDEE calculator tab
- the calculators all render into the DOM, which causes it to have 3 component with the same id (weight-something and waist-something). This doesn't seem to cause any problems now, but might screw me up in the future. Fix this - there doesn't seem to be a way to only render one tab at the time to the DOM with Chakra's Tabs, though maybe I wasn't looking hard enough. I may need to change the input's name to something e.g. `weightBMI`
- there are some layout issues on rotated iPad
- add find feature with `fuse.js`
- for mobile, add alternative for tooltip
- looks bad on mobile in TDEE calculator

- add indicators saying if e.g. your BMI is okay, give explanation what does BMI and TDEE mean and their uses cases, give instructions on how you should measure yourself
- sometimes numbers like 102.000000003 show up - round floats to second digit after period
- always show the scrollbar
- start with empty gender, so the user is forced to select the correct gender
- add fancy slide in of the content on page load
- if a form is partilally filled it (e.g. add food) send an alert asking user if he's sure, and he'll loose progress
- the sidebar is hidden on the mobile - make sidebar's content accessable on the mobile through line in the hamburger menu
- hide category if it's null or an empty string