# Fit Tracker

## TODOS

- make it possible to add e.g. % at the end in SubmitAndResult
- you can use imperial or metric units
- I'm using teal ghost buttons all over the place, I should put it in a AppButton component or something like this
- convert `<ColorSchemeSwitch>` into `<IconButton>`
- finish the *remember-user's-measurements-across-calculators* feature
- the sidebar moves in TDEE calculator tab
- the calculators all render into the DOM, which causes it to have 3 component with the same id (weight-something and waist-something). This doesn't seem to cause any problems now, but might screw me up in the future. Fix this - there doesn't seem to be a way to only render one tab at the time to the DOM with Chakra's Tabs, though maybe I wasn't looking hard enough. I may need to change the input's name to something e.g. `weightBMI`

- start with empty gender, so the user is forced to select the correct gender
- add fancy slide in of the content on page load
- the search feature is broken sometimes, figure out why (storing computed state in useState?). I'm using `foodListArray` instead of `searchResult`
- if a form is partilally filled it (e.g. add food) send an alert asking user if he's sure, and he'll loose progress
- I should only show if your are past the limit only for Calories
- there are some errors while submitting a class instance into the store - because its methods are not serializable. Maybe I should switch my approach from class based to functional?

- add indicators saying if e.g. your BMI is okay, give explanation what does BMI and TDEE mean and their uses cases, give instructions on how you should measure yourself
- make sidebar and main content cards more consistant
- add `<aside>` tag for the sidebar and `<main>` for the main section
- and `<nav>` and `<ul>` for the links
- hide hamburger on desktop
- make spacing between main and sidebar equal to spacing betweem navbar, content and footer. And make sure spacing between cards is the same in main and aside