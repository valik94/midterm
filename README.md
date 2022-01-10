# PasswordKeeper

# User Stories
1. As a user I want to register/login and be assigned to an organization because I want to quickly select which passwords for which organizations I want to store safely.
2. An organization should be able to host many users.
3. As a user I should be able to add a new username and password for a specific website of any of the 3 following types: Banking/Financial (CIBC, RBC, WealthSimple, etc.) , Email/WorkEmail (gmail,outlook,etc) , Social Media (Facebook,Instagram, Twitter,etc.)
4. As a user I should also be able to generate passwords based on criteria that I can specify to match security password policy, including: 
- password length
- contains lowercase characters
- contains uppercase characters
- contains numbers
5. As a user I can edit and change my stored passwords of any of my accounts for organization at any time.
6. As a user I have a button to copy the selected passwords for convenience and to avoid mistyping purposes.
7. As a user I can categorize my passwords as aforementioned into 1 of 3 categories social media, email/work and banking/financial to be able to organize my password storage needs.

# Git Workflow
NEVER code on Master or Main!

#Create Feature Branches
git checkout -b feature/my-feature

Master / Main branch is your production branch, never directly work on it!
Workflow
#Starting a new branch
1. git checkout master / git checkout main (Start new branches from the main branch)
2. git pull (Make sure you have the most recent version)

#Working on the branch
3. git checkout feature/my-feature (Make your feature)
4. git add & git commit (Commit often with meaningful messages !)
5. git push (So it's not only local)

#Merging master / main in the branch
6. git checkout master / git checkout main (To update it)
7. git pull
8. git checkout -b feature/my-feature (Back to your feature)
9. git merge master / git merge main
10. Fix conflicts if any
11. git commit (commit the merge)
12. git push (So it's not only local)

#Merging the branch back in master / main
13. git checkout master / git checkout main (To merge your branch)
14. git merge feature/my-feature
15. Should not be any conflict since you cleaned them in the branch first
16. git commit (commit the merge)
17. git push (So it's not only local)
