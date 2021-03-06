# Tetragone

Tetragone is an ultra-lightweight Javascript layout library that will automatically arrange your layout in a satisfying way.

![Banner](image/banner-logo.png)

## How to use ?

Getting started with Tetragone is super fast :

1. Download the ["dist" folder](https://github.com/m0wh/tetragone/tree/master/dist) on GitHub.
2. Link the stylesheet and the script file in the head
  ```html
    <head>
      <!-- some meta -->
      <title>...</title>
      <link rel="stylesheet" href="css/tetragone.min.css">
      <script src="js/tetragone.min.js"></script>
    </head>
    ...
  ```
  or using CDN :
  ```html
    <link rel="stylesheet" href="https://cdn.rawgit.com/m0wh/tetragone/e409999f/dist/css/tetragone.min.css">
    <script src="https://cdn.rawgit.com/m0wh/tetragone/e409999f/dist/js/tetragone.min.js"></script>
  ```
3. Just before the closing `</body>`, add the following script
  ```html
      ...
      <script type="text/javascript">
        tetragone("tetragone", 4);
      </script>
    </body>
  ```
  `tetragone([className],[maxColumns])`  
  *String* `className` : Class name used for the grid container(s).  
  *Integer* `maxColumns` : Max number (1-10) of columns on a same row.

4. Finally, you can add your elements like this
  ```html
  <div class="tetragone">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
  ```



## To-do before 1.0 release :

- Make responsive
- ... [You have an idea ?](https://github.com/m0wh/tetragone/issues)
