# buttons.scss, line 18 - 24
Two find the gap between to svg elements, we can use a mathematical concept
given : coordinate of the first circle = (76,20)
        coordindate of the second circle = (20,20)
        radius for both is 19.5

So the horizontal distance between their centers is |76 - 20| = 56
But we need to subtract the sum of their radii from that number

gap = 56 - (2 * radius)
    = 56 - (2 * 19.5)
    = 56 - 39 = 17

Thus, these two circles can be flexed and the gap between them will be 17px.
------------------------------------------------------------------------------------
# index.html, line 133 - 145 & buttons.scss, line 18-39

I learned how to work with svgs
-How to insert them inside an html file,
-viewbox,
-radius,
-fill and stroke,
-svgs and hover,
-how to break a single svg element into two separate svg elements,
I still need to practice 
---------------------------------------------------------------------------------------
# section.scss, line 179 - 194

I learned how to include a background styling for a part of a box
For instance, if we have an image with a caption and the background style should only included for that caption box, we create a big container that will contain the caption and whose background will be styled accordingly.

This particular line of code also give me significant insights into how I can better manipulate css positions and z-indices.
----------------------------------------------------------------------------------------
# buttons.scss, line 18 - 34 (updated)

In this case, since the svgs are two separate buttons, it is better to use two svg elements inside a parent container. By using display of flex and specifiying the gap, I was able to replicate the design on figma. The hovering property is also functional.

however, I am still facing issues when working with svgs. In this case, I noticed that the left and right buttons look very small on the browser than they do on the figma design. Moreover, when I reduce the viewport width to 768px using the browser's responsive device mode, the svgs look bigger and more like those on the design.


# I'm starting to think it's the zoom on the browser...
When I accidentally made the zoom at 100%, svgs looked normal all of a sudden
if it's at 75% or 50%, the svgs will definitely look smaller
* this is a significant realization 
What is going on? (I'll get back to this)
-------------------------------------------------------------------------------------
# tablet.scss, line 306 - 316
I noticed that on tablet version, one of the svgs gets flipped upside down. To do that, I used the transform property.
transform: rotateY(180deg)
-------------------------------------------------------------------------------------
# index.html, line 128 - 154

unfortunately, I have to start over on the third section, because my code did not consider what happens when I have mutiple slides. When working with those, the styling get very complicated. As such, I have to modify my code.
----------------------------------------------------------------------------------------

# section.scss, line 167 - 171

Margin collapsing happens when the parent element has no border, padding or overflow properties set. When we set margin top for the child, that margin is applied to the parent and not the child. We can prevent this by specifying padding, adding a border or setting our overflow value to hidden.
-----------------------------------------------------------------------------------------
this is important to display the background image
background image needs width and height when flexing!!