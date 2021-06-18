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
- add validation "sanity test" validation login on calories: i.e. if user put 20 Calories and 10g of fat, then it clearly doesn't add up (20 << 10\*9). There should be a message saying that the user may be icorrect, it the error passes a certain threshold. It's worth to keep in mind that user may also just want to track calories, so he puts fat,carbs, protein as 0, even though Calories is somethingl like 400
- add indicators saying if e.g. your BMI is okay, give explanation what does BMI and TDEE mean and their uses cases, give instructions on how you should measure yourself
- make the logo a link to the home page
- rename the site into **Track** _Fit_ ('Track' is bold, 'Fit' is think)
- for some reason I can't put floats in the input
- make it possible to add e.g. % at the end in SubmitAndResult
- form logic is a little bit repetetive, there might be a better way to handle the form logic
- make it responsive on mobile, maybe I should use Drawer
- figure out themes - why tf is the mode dark in my dev setup, but light in the Internet?
- add goals - e.g. 2000 Calories, 100g of protein per day, show progress bar, show it red it the user went orderboard, etc
- show "progres" of the intake of the day on the side bar, hide it on mobile, also add seperate page of the "progress" and add only show link to "progress" page in the navbar. this way both desktop and mobile users get a better experience
- light and dark theme toggle should be reletively easy
- if a form is partilally filled it (e.g. add food) send an alert asking user if he's sure, and he'll loose progress
- for some reason, I can't get a button with an icon, because of [some weirdness](https://github.com/chakra-ui/chakra-ui/issues/683).The workaround I came up with doesn't really give a feedback if the icon is "hovered"