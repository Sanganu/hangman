       // Global variables
       var gl_artist = ['jency','chitra','janaki','spb','illayaraja','chinmayi','shreeyagoshal','hariharan','yesudas'];
       var gl_album = ["En Vaanilay",
                        "Ninnukori Varanam",
                        "Kaatril enthan geetham",
                        "Senorita",
                        "Raja Raajathi",
                        "Nee Kaatru Naan",
                        "Thoongatha Vishigal"];
       var gl_pics = [
              "http://www.cinecoffee.com/wp-content/uploads/2015/01/Singer-Jency-Antony-Latest-Stills.png",
              "http://www.thehindu.com/2005/07/21/images/2005072113740201.jpg",
              "http://www.cineradham.com/assets/images/biography/singers/s-janaki/1419940481s-janaki-biography.jpg",
              "https://1.bp.blogspot.com/_FKxki5wK_p0/R2LKW1CeppI/AAAAAAAAABQ/twgtu3Xbb7M/S220/SPB+14.JPG",
              "http://2.bp.blogspot.com/-L9RklEQSXUU/UbX7ViTMciI/AAAAAAAAAm4/YL0rjB31Nes/s1600/3486337.cms.jpg",
              "https://chiloka.com/i/i/h/a/r/hariharan-7.jpg",
              "http://s.saregama.com/image/c/m/0/fb/9e/yeshu_1401893713.jpg"
              ]
       var gl_audio = [
             "./audio/jencysong.mp3",
             "./audio/chitrasong.mp3",
             "./audio/janakisong.mp3",
             "./audio/spbsong.mp3",
             "./audio/illayarajasong.mp3",
             "./audio/hariharansong.mp3",
             "./audio/yesudassong.mp3"
       ]
       var gl_tries;
       var gl_word ;
       var gl_tryletter ;
       var gl_end = false;
       var gl_answer 
       var gl_win = 0;
       var gl_lost = 0;
      
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
            for(let i=0;i<gl_artist.length;i++){
              var singer =  gl_artist[i];
              singerlist = singerlist + `<span class="names">${singer.charAt(0).toUpperCase()}${singer.slice(1)}   </span>`;
              console.log(singerlist);
            }
            console.log("Singerlist" - singerlist);
            singerbox.innerHTML = singerlist;
            // singerbox.innerHTML = gl_artist;
       }

         function game()
         {
             var index = parseInt(Math.random()*(gl_artist.length));
                gl_word = gl_artist[index];
                console.log('The Artisit is :'+gl_artist[index]);
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
              //  t2.textContent = "";
                httotalguess.textContent = gl_tries;
                htletterguess.textContent = gl_tryletter;
          }

         function display()
          {
            var vname = document.getElementById("name");
            var valbum = document.getElementById("album");
            var vhd = document.getElementById("subhead");
            var pic = document.getElementById("artpic");
            var aud = document.getElementById("audiofile");
            //console.log('The wordin display :'+gl_word);
            vname.textContent = gl_word;
            var ind = gl_artist.indexOf(gl_word);
            valbum.textContent = gl_album[ind];
            vhd.textContent = "The Artisit is : "+gl_word+" ... listen to her song while guessing the next artist... ";
            pic.setAttribute("src",gl_pics[ind]);
            aud.setAttribute("src",gl_audio[ind]);
          }




     document.onkeyup = function(event)
     {
        var codek = event.keyCode;
        console.log('codek + :'+codek);
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

