import velocity from './../../js/velocity.min.js'

import circliful from './../../js/donuts.js'

export function donuts(){
      $("#mongo").circliful({
        animationStep: 18,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        foregroundColor: '#fdea5b',
        backgroundColor: 'black',        
        percent: 94,
        noPercentageSign: true,
        text: 'MongoDB',
        replacePercentageByText: 'MongooseJS',
        percentageTextSize: '16',
        textStyle: 'font-family: pier; transform: translateY(5px)',
        textColor: '#8e8d8d',
        animation: 1,
        targetTextSize: '15',
        textAdditionalCss: 'font-family: pier; fill: white;',
        delay: 2350
    });  


      $("#sass").circliful({
        animationStep: 18,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        foregroundColor: '#39f3c9',
        backgroundColor: 'black',        
        percent: 97,
        noPercentageSign: true,
        text: 'CSS',
        replacePercentageByText: 'SASS',
        percentageTextSize: '16',
        textStyle: 'font-family: pier; transform: translateY(5px)',
        textColor: '#8e8d8d',
        animation: 1,
        targetTextSize: '15',
        textAdditionalCss: 'font-family: pier; fill: white;',
        delay: 2350
    });           

      $("#html").circliful({
        animationStep: 18,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        foregroundColor: '#fdea5b',
        backgroundColor: 'black',        
        percent: 97,
        noPercentageSign: true,
        text: 'Markup',
        replacePercentageByText: 'HTML',
        percentageTextSize: '16',
        textStyle: 'font-family: pier; transform: translateY(5px)',
        textColor: '#8e8d8d',
        animation: 1,
        targetTextSize: '15',
        textAdditionalCss: 'font-family: pier; fill: white;',
        delay: 2350
    });      

      $("#git").circliful({
        animationStep: 18,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        foregroundColor: '#fb506e',
        backgroundColor: 'black',        
        percent: 90,
        noPercentageSign: true,
        text: 'Git',
        replacePercentageByText: 'SVN',
        percentageTextSize: '16',
        textStyle: 'font-family: pier; transform: translateY(5px)',
        textColor: '#8e8d8d',
        animation: 1,
        targetTextSize: '15',
        textAdditionalCss: 'font-family: pier; fill: white;',
        delay: 2350
    });    

      $("#gulp").circliful({
        animationStep: 18,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
        foregroundColor: '#61e1ff',
        backgroundColor: 'black',        
        percent: 90,
        noPercentageSign: true,
        text: 'Gulp',
        replacePercentageByText: 'Task Runners',
        percentageTextSize: '16',
        textStyle: 'font-family: pier; transform: translateY(5px)',
        textColor: '#8e8d8d',
        animation: 1,
        targetTextSize: '15',
        textAdditionalCss: 'font-family: pier; fill: white;',
        delay: 2350
    });   


          for( var x =0; x < 5; x++){
    
              $($('.svg-container')[x]).velocity({
                rotateZ: '0deg'
              }, {
                easing: 'easeOutQuart',
                delay: 2200
              })
              
          } 
                      
}