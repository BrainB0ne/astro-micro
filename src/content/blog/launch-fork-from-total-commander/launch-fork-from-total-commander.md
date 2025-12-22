---
title: "Launch Fork from Total Commander"
description: "Launch Fork from Total Commander"
date: "2023-01-11"
tags: 
  - "windows-applications"
---

I discovered that it is easy to open the current selected Git repository with [Fork](https://fork.dev) through [Total Commander](https://www.ghisler.com).

1. Add a new Toolbar Button to the Total Commander Toolbar.
2. Select the Fork Executable: C:\\Users\\User\\AppData\\Local\\Fork\\Fork.exe
3. Parameters: "%P."
4. Start path: C:\\Users\\User\\AppData\\Local\\Fork\\
5. Select Icon
6. Tooltip: Fork

Attention: Replace "User" with your own Windows Username!

Save this Button and it will be shown in the Toolbar. Clicking the Button results in Fork being launched with the selected repository.

![Total Commander Fork Toolbar Button](images/TotalCommanderFork.png)
