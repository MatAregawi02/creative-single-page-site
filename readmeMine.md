# things I learned, portfolio notes

1) the use of mixins, nested elements, how to organize sass
=> if a mixin has two many parameters, it's actually counterproductive to use it.
=> if for three components, I have to adjust 6 parameters, what's the point?
=> Example: take a look at your nav btn and other mixins...

2) the important of modular and incremental development 


here's my process:
first, i fixed the html of the header, styled it and made it responsive across
three device widths (375, 768 and 1400)
* header only
Then I moved to the hero and did the same thing

After I write a small amount of code, I test to see the effect => incremental
when I code, i only focus on one part at a time, which makes debugging easier => modular

3) background images allow content to be on top of them
they don't push down


4) there was one div that wasn't in the right place
it ruined the entire layout 

5) I learned the importance of pseudoelements when working with underlined links that have to be highlighted when hovering...
(how do we make it so that everything -the content and the line- gets hightlighted)?

6) look into how to better incorporate media queries and responsiveness into your program
(variables, importing,...)
is there a much better way than just dumping everything into the three folders?
------------------------------------------------
#####
This code snippet had a problem
the margin top added to the horizontal line made it so that when I hovered right in between the a tag and the line, nothing would get highlighted...
so I used the concept of pseudo classes to create a horizonal line that's part of the a tag
I used chat gpt as reference...
//     .card-one-link{
        
//         a{
           
//             display: inline-block;
           
          
//         }
//     }
//     span.horizontal-line{
//         margin-top: 8px;
//         display : block;
//         width : 124px;
//         height : 2px;
//         background-color: #F94F4F;
//     }
#####