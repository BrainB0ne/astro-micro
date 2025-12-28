---
title: "[Release] Spotweb Filter Creator 0.3.0"
description: "[Release] Spotweb Filter Creator 0.3.0"
date: "2013-02-14"
tags: 
  - "applications"
  - "linux"
  - "windows-applications"
---

Today, Spotweb Filter Creator 0.3.0 has been released.

This is a bug-fix release. With the previous version, it was possible in some scenarios to get filter items with non-unique ID's. This would confuse Spotweb when uploading the filters, and some sub-filters could be appended to the wrong top filter, when working with nested filter items.

I also added a spotwebfc.sh wrapper script for the Linux version to make it possible to start Spotweb Filter Creator even if the Qt libraries are not installed on the system. By starting Spotweb Filter Creator with spotwebfc.sh, the bundled Qt libraries in the "lib" folder will be loaded.

Downloads are available at the [Spotweb Filter Creator](http://www.brainbytez.nl/spotweb-filter-creator/ "Spotweb Filter Creator") project page.
