$(document).ready(function(){

    // OPTION 1: click event
    // $('#btn1').click(()=>{
        //     alert('Button Clicked')
        // });
        
    // OPTION 2: click event
    // $('#btn1').on('click', ()=> {
    //     alert('Button Clicked!')
    // })
    
    // $('#btn1').on('click', ()=> {
    //     // $('.para1').hide()
    //     $('.para1').toggle()
    // })

    // $('#btn2').on('click', ()=> {
    //     $('.para1').show()
    // })

    // DOUBLE CLICK
    // $('#btn1').dblclick(function(){
    //     $('.para1').toggle()
    // })
    
    // HOVER - combo of mouse enter and mouse leave
    // $('#btn2').hover(function(){
    //     $('.para1').toggle()
    // })
    
    // MOUSE ENTER
    // $('#btn2').mouseenter(function(){
    //     $('.para1').toggle()
    // })
    
    // MOUSE LEAVE
    // $('#btn1').mouseleave(function(){
    //     $('.para1').toggle()
    // })
    
    // MOUSE MOVE
    // $('#btn1').on('mousemove', ()=> {
    //     $('.para1').toggle()
    // })

    // MOUSE DOWN
    // $('#btn1').on('mousedown', ()=> {
    //     $('.para1').toggle()
    // })

    // MOUSE UP
    // $('#btn1').on('mouseup', ()=> {
    //     $('.para1').toggle()
    // })

    // EVENT HANDLING
    // $('#btn1').click((e)=> {
    //     console.log(e.currentTarget.id)
    //     console.log(e.currentTarget.textContent)
    //     console.log(e.currentTarget.outerHTML)
    //     console.log(e.currentTarget.className)
    // })

    // COORDINATES
    // $(document).on('mousemove', (e)=> {
    //     // console.log(`Coords: Y: ${e.clientY} X: ${e.clientX}`)

    //     // append would just keep adding this to the html of the selected element, .html replaces it
    //     $('#coords').append(`Coordinates Y: ${e.clientY} X: ${e.clientX}`)
    //     $('#coords').html(`Coordinates Y: ${e.clientY} X: ${e.clientX}`)
    // })

    // FOCUS EVENT - when you click into an input
    // $('input').focus(function(){
    //     // alert('Focus');
    //     $(this).css('background', 'pink');
    // });     

    // BLUR EVENT - when you click outside an input
    // $('input').blur(function(){
    //     // alert('Focus');
    //     $(this).css('background', 'white');
    // });    
    
    // KEY UP
    // $('input').on('keyup', (e)=> {
    //     console.group(e.target.value);
    // });

    // CHANGE EVENT
    $('select#gender').change((e)=> {
        // alert('changed');
        console.log(e.target.value)
    });

    // SUBMIT EVENT
    $('#form').submit((e)=> {
        e.preventDefault()
        let name = $('input#name').val()
        console.log(name)
    });

})