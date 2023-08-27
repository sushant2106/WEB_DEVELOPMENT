<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            background-color: beige;
            border: 5px solid black;
            margin: 2px;
            padding: 2px;
            display: flex;
            height: 400px;
            flex-direction: row;

            /* align-items cross axix pe ye chalta hai */
           /* align-items: center; */
           /* align-items: start; */
           /* align-items: end; */
           /* align-items: stretch; */

           justify-content: center;
           align-items: center;




        }
        .box{
            height: 100px;
            width: 100px;
            border: 2px solid brown;
            margin: 2px;
            padding: 2px;
        }
        #box1{
           background-color: aqua;
        }
        #box2{
            background-color: blue;
        }
        #box3{
            background-color: orange;
        }
        #box4{
            background-color: brown;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box" id="box1"></div>
        <div class="box" id="box2"></div>
        <div class="box" id="box3"></div>
        <div class="box" id="box4"></div>
    </div>
</body>
</html>
