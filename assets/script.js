       // Global variables
      var gl_artistprofile =[
         {
           name:"Jency",
           song:"En Vaanilay",
           image:"",
           audio:"./resources/audio/jencysong.mp3"
         },
         {
          name:"Chitra",
          song:"Ninnukori Varanam",
          image:"",
          audio:"./resources/audio/chitrasong.mp3"
        },
        {
          name:"Janaki",
          song:"Kaatril enthan geetham",
          image:"",
          audio:"./resources/audio/janakisong.mp3"
        },
        {
          name:"SPB",
          song:"Senorita",
          image:"",
          audio:"./resources/audio/spbsong.mp3"
        },
        {
          name:"Illayaraja",
          song:"Raja Raajathi",
          image:"",
          audio:"./resources/audio/illayarajasong.mp3"
        },
        {
          name:"Chinmayi",
          song:"",
          image:"",
          audio:""
        },
        {
          name:"ShreyaGoshal",
          song:"Mannipaya",
          image:"",
          audio:"./resources/audio/shreeyagoshal.mp3"
        },{
          name:"Hariharan",
          song:"",
          image:"",
          audio:"./resources/audio/hariharansong.mp3"
        },{
          name:"Yesudas",
          song:"",
          image:"",
          audio:"./resources/audio/yesudassong.mp3"
        }
       ];

       var gl_tries;
       var gl_word ;
       var gl_tryletter ;
       var gl_end = false;
       var gl_answer 
       var gl_win = 0;
       var gl_lost = 0;
       var index;

       reset();
       game();

       function reset(){
   
            var htwins = document.getElementById('twin');
            var htlosses = document.getElementById('tlost')
            htwins.textContent = 0;
            htlosses.textContent = 0;
            var singerbox = document.getElementById("singerslist");
            console.log("in reset");
            var singerlist =""
            for(let i=0;i<gl_artistprofile.length;i++){
              var singer =  gl_artistprofile[i].name;
              singerlist = singerlist + `<span class="names">${singer}   </span>`;
              console.log(singerlist);
            }
            console.log("Singerlist" - singerlist);
            singerbox.innerHTML = singerlist;
            // singerbox.innerHTML = gl_artist;
       }

         function game()
         {
                index = parseInt(Math.random()*(gl_artistprofile.length));
                gl_word = gl_artistprofile[index].name.toLowerCase();
                var aud = document.getElementById("audiofile");
                aud.setAttribute("src",gl_artistprofile[index].audio);
               
                console.log('The Artisit is :'+gl_artistprofile[index]);
                var dashletter = "";
                 gl_tries = gl_word.length * 2;
                 gl_tryletter = "";
                 gl_end = false;
                 gl_answer = "";

                //getting HTML elements
                var htdashes = document.getElementById("dash");
                var httotalguess = document.getElementById("totalguess");
                var htletterguess = document.getElementById('letterguess');
                var htword = document.getElementById("word");
                var htname = document.getElementById("name");

                for(  var l = 0;l < gl_word.length;l++)
                {
                   gl_answer = gl_answer + " ";
                   dashletter = dashletter + " _";
                }
                htdashes.textContent = dashletter;
                httotalguess.textContent = gl_tries;
                htletterguess.textContent = gl_tryletter;
          }

         function display()
          {
            var vname = document.getElementById("name");
            var valbum = document.getElementById("album");
            var vhd = document.getElementById("subhead");
            var pic = document.getElementById("artpic");
           
            //console.log('The wordin display :'+gl_word);
            vname.textContent = gl_word;
            valbum.textContent = gl_artistprofile[index].album;
            vhd.textContent = "The Artisit is : "+gl_word+" ... listen to her song while guessing the next artist... ";
            pic.setAttribute("src",pic);
          }




     document.onkeyup = function(event)
     {
        var codek = event.keyCode;
        console.log('codek + :'+codek);
        document.getElementById("message").textContent = "";

        if ( (( codek > 64) && (codek < 91)) ||
           ((codek > 96) && (codek < 123)) )
           {
                            var entry = event.key;
                            console.log('Event key :'+entry);
                            letter = entry.toLowerCase();
                            var found = false;


                            for( var k =0; k < gl_tryletter.length; k++)
                            {
                                  if (letter === gl_tryletter[k])
                                  {
                                    found = true;
                                  }
                            }

                            if (found)
                            {
                                  console.log(" found Number of tries: "+ gl_tries);
                                  document.getElementById("message").textContent = "Letter already guessed!"
                            }
                            else {
                                                var init = false;
                                                for(var i =0; i < gl_word.length; i++)
                                                {
                                                  if ( letter === gl_word[i] )
                                                  {
                                                           var part1 = gl_answer.substring(0,i);
                                                           var part2 = gl_answer.substring(i+1);
                                                           //console.log('part1 : '+part1);
                                                           //console.log('part2 : '+part2);
                                                           var fulltext = part1.concat(letter,part2);
                                                           gl_answer = fulltext;
                                                           //console.log("full: "+fulltext);
                                                           //console.log('Right Letter :  '+ gl_answer[i]);
                                                           init = true;
                                                    }

                                                }
                                             if (init)
                                              {
                                                   console.log('right letter guess : '+gl_answer);
                                                     
                                              }
                                             else {
                                                   gl_tryletter = gl_tryletter + letter;
                                                  // console.log('tryletter : '+ gl_tryletter.length);
                                                   gl_tries = gl_tries - 1 ;
                                                   //console.log('try letter : '+ gl_tryletter);
                                             }

                                      }
                                     //reset to next game
                                     //console.log('the answer array : '+gl_answer);
                                     //console.log('The artist : '+gl_word);
                                     //console.log('The letters guessed array : '+gl_tryletter);
                                     if (gl_answer === gl_word)
                                     {
                                             gl_win++;
                                             gl_end = true;
                                             var ht1 = document.getElementById("word");
                                             ht1.innerHTML = gl_word;
                                           //  alert("Congrats...");
                                             display();
                                     }
                                     else if (gl_tries === 0) {
                                             gl_lost++;
                                             gl_end = true;
                                             //alert("Ooops...");
                                             display();
                                     }

                                   var ht1 = document.getElementById("word");
                                   var ht3 = document.getElementById('twin');
                                   var ht4 = document.getElementById('tlost');
                                   var ht5 = document.getElementById('letterguess');
                                   var httotalguess = document.getElementById("totalguess");
                                   ht1.textContent = gl_answer;
                                   httotalguess.textContent = gl_tries;
                                   ht3.textContent = gl_win;
                                   ht4.textContent = gl_lost;
                                   ht5.textContent = gl_tryletter;
                              

                                   if (gl_end) {
                                     game();
                                   }
                     }
                     else {
                       console.log('Press Letters only!!!');
                     }
      }

