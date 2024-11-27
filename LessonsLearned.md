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
-viewbox
-radius
-fill and stroke
-svgs and hover
-how to break a single svg element into two separate svg elements
* I still need to practice 