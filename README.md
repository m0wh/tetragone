# Tetragone

Tetragone is a Javascript layout libraty that will automatically arrange your layout in a satisfying way.



## How to use ?

Getting started with Tetragone is super fast :

1. Download the ["dist" folder](https://github.com/m0wh/tetragone/tree/master/dist) on GitHub.
2. Link the stylesheet and the script file in the head
  ```html
    <head>
      <!-- some meta -->
      <title>...</title>
      <link rel="stylesheet" href="css/tetragone.css">
      <script src="js/tetragone.js"></script>
    </head>
    ...
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
