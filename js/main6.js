const open_check = document.querySelector('#open'); //.navbar
const close_check = document.querySelector('.btn-close');
const main_div = document.querySelector('#main');
const aTag_array = document.querySelectorAll('.bible-a-tag');
const title_h1_tag = document.querySelector('#title');

const modal = document.querySelector('.modal');
const modal_content = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');


const body = document.body;
const div = document.createElement('div'); // div for full content
div.setAttribute("id", "full_content"); 

const div2 = document.createElement('div'); // div for first letter content
div2.setAttribute("id", "version_mode_content"); 
//div2.setAttribute("style", "display: none"); // inline is default

const back_div = document.querySelector('#back-div'); // Back link div shown in Cycle mode
const chapter_list_div = document.querySelector('#chapter-section'); // chapter list section div, shown in Normal mode

const div3 = document.createElement('div'); // div for first letter content
div3.setAttribute("id", "chapter_list_content"); 
div3.setAttribute("style", "display: inline"); 

const modal_h1_div = document.createElement('div');

const help = document.querySelector('#help'); // Help option in main menu

const about = document.querySelector('#about'); // About option in main menu

const memory_title = document.querySelector('#memory-title'); // memory title div
   

// listens for Open menu control
open_check.addEventListener("click", function(e)  {

        e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        

        if(div.hasChildNodes()) {
            let q = document.querySelectorAll('.dynamic-a');
            for(let i = 0; i < q.length; i++) {
                q[i].removeEventListener("click", test_layout);
                console.log("remove temp link listeners");
            }
        }

        if(div3.hasChildNodes()){
            div3.style.visibility = 'hidden';
        }

        for (let i = 0; i < aTag_array.length; i++) {
            console.log("open_check");
            aTag_array[i].addEventListener("click", test_layout);
        };
    
    
}, false);  

// listens for close menu control
close_check.addEventListener("click", function(e) {

    e.preventDefault();
    //e.stopPropagation();
    e.stopImmediatePropagation();

    if(div3.hasChildNodes()){
        div3.style.visibility = 'visible';
    }

    console.log("close_check");
    for (let i = 0; i < aTag_array.length; i++) {
        aTag_array[i].removeEventListener("click", test_layout);
    };

    let q_array = document.querySelectorAll('.dynamic-div');
    
    for (let i = 0; i < q_array.length; i++) {
        q_array[i].addEventListener("click", toggleVerse);
        
    };

    //e.preventDefault();
    
}, false);

// listens to chapter list area links
chapter_list_div.addEventListener("click", function(e) {
    
    //e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('chapter list link select');
    //e.preventDefault();
    return false;
});

// listens to back div
back_div.addEventListener("click", function(e) {

    //e.preventDefault();
    //e.stopPropagation();
    e.stopImmediatePropagation();

    console.log("back_check");
    div3.style.display = "inline";
    div.style.display = "inline";

    back_div.style.display = "none";

    memory_title.textContent = "KJV Bible Memory: NORMAL";
    
    if(div2.hasChildNodes()){
        while(div2.firstChild) {
            //div2.firstChild.removeEventListener("click", test_layout);
            div2.removeChild(div2.firstChild);
            console.log("removerssssss");
        }  
    }   
    
}, false);



// LISTENS to Help MAIN menu option
help.addEventListener("click", toggleModal); // Main menu Help option

// LISTENS to About MAIN menu option
about.addEventListener("click", toggleModal); // Main menu About option

// Close button for modals
closeButton.addEventListener("click", toggleModal);

// For closing modal after selecting modal surroundings
//window.addEventListener("click", windowOnClick);

// CREATES Verse divs for verses when a book is selelcted in main menu
function test_layout(e) {
    e.preventDefault();
   // e.stopPropagation();
    e.stopImmediatePropagation();

    if(div.hasChildNodes()){
        while(div.firstChild) {
            div.removeChild(div.firstChild);
            console.log("removerssssss");
        }
    }


    if(div3.hasChildNodes()){
        while(div3.firstChild) {
            div3.removeChild(div3.firstChild);
            console.log("removerssssss");
        }
    } 


    chapter_list_div.append(div3);

    main_div.append(div); 
    main_div.append(div2);

    // chapter variable to help retain chapter number for previous verse during for loop in switch statement
    let chapter = "0";

    switch(e.target.id) {
        case "genesis": 
            console.log("genesis");
            for(i = 0; i < genesis_full_data.length; i++) {
                let t = verse_parser5(genesis_full_data[i], genesis_first_data[i], genesis_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            } 

            break;
        case "exodus":
            for(i = 0; i < exodus_full_data.length; i++) {
                let t = verse_parser5(exodus_full_data[i], exodus_first_data[i], exodus_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            } 
           
            break;
        case "leviticus":
            for(i = 0; i < leviticus_full_data.length; i++) {
                let t = verse_parser5(leviticus_full_data[i], leviticus_first_data[i], leviticus_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            } 
            
            break;
        case "numbers":
            for(i = 0; i < numbers_full_data.length; i++) {
                let t = verse_parser5(numbers_full_data[i], numbers_first_data[i], numbers_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            } 
           
            break;
        case "deuteronomy":
            for(i = 0; i < deuteronomy_full_data.length; i++) {
                let t = verse_parser5(deuteronomy_full_data[i], deuteronomy_first_data[i], deuteronomy_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            
            break;
        case "joshua":
            for(i = 0; i < joshua_full_data.length; i++) {
                let t = verse_parser5(joshua_full_data[i], joshua_first_data[i], joshua_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            
            break;
        case "judges":
            for(i = 0; i < judges_full_data.length; i++) {
                let t = verse_parser5(judges_full_data[i], judges_first_data[i], judges_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            
            break;

        case "ruth":
            for(i = 0; i < ruth_full_data.length; i++) {
                let t = verse_parser5(ruth_full_data[i], ruth_first_data[i], ruth_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            //div.innerHTML = verse_parser(ruth_full_data, e.target.textContent);
            break;

        case "samuel1":
            for(i = 0; i < samuel1_full_data.length; i++) {
                let t = verse_parser5(samuel1_full_data[i], samuel1_first_data[i], samuel1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "samuel2":
            for(i = 0; i < samuel2_full_data.length; i++) {
                let t = verse_parser5(samuel2_full_data[i], samuel2_first_data[i], samuel2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            
            break;
        case "kings1":
            for(i = 0; i < kings1_full_data.length; i++) {
                let t = verse_parser5(kings1_full_data[i], kings1_first_data[i], kings1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            
            break;
        case "kings2":
            for(i = 0; i < kings2_full_data.length; i++) {
                let t = verse_parser5(kings2_full_data[i], kings2_first_data[i], kings2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
  
            break;
        case "chronicles1":
            for(i = 0; i < chronicles1_full_data.length; i++) {
                let t = verse_parser5(chronicles1_full_data[i], chronicles1_first_data[i], chronicles1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            
            break;
        case "chronicles2":
            for(i = 0; i < chronicles2_full_data.length; i++) {
                let t = verse_parser5(chronicles2_full_data[i], chronicles2_first_data[i], chronicles2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "ezra":
            for(i = 0; i < ezra_full_data.length; i++) {
                let t = verse_parser5(ezra_full_data[i], ezra_first_data[i], ezra_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
        
            break;
        case "nehemiah":
            for(i = 0; i < nehemiah_full_data.length; i++) {
                let t = verse_parser5(nehemiah_full_data[i], nehemiah_first_data[i], nehemiah_blank_data[i], e.target.textContent, i, chapter);
                // console.log(t);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "esther":
            for(i = 0; i < esther_full_data.length; i++) {
                let t = verse_parser5(esther_full_data[i], esther_first_data[i], esther_blank_data[i], e.target.textContent, i, chapter);
                // console.log(t);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "job":
            for(i = 0; i < job_full_data.length; i++) {
                let t = verse_parser5(job_full_data[i], job_first_data[i], job_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            console.log("Job");
            break;

        case "psalms":
            for(i = 0; i < psalms_full_data.length; i++) {
                let t = verse_parser5(psalms_full_data[i], psalms_first_data[i], psalms_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                
                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            } 
            break;

        case "proverbs":
            for(i = 0; i < proverbs_full_data.length; i++) {
                let t = verse_parser5(proverbs_full_data[i], proverbs_first_data[i], proverbs_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            //div.innerHTML = verse_parser(proverbs_full_data, e.target.textContent);
            break;

        case "ecclesiastes":
            for(i = 0; i < ecclesiastes_full_data.length; i++) {
                let t = verse_parser5(ecclesiastes_full_data[i], ecclesiastes_first_data[i], ecclesiastes_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            //div.innerHTML = verse_parser(ecclesiastes_full_data, e.target.textContent);
            break;

        case "solomon":
            for(i = 0; i < solomon_full_data.length; i++) {
                let t = verse_parser5(solomon_full_data[i], solomon_first_data[i], solomon_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "isaiah":
            for(i = 0; i < isaiah_full_data.length; i++) {
                let t = verse_parser5(isaiah_full_data[i], isaiah_first_data[i], isaiah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            //div.innerHTML = verse_parser(isaiah_full_data, e.target.textContent);
            break;

        case "jeremiah":
            for(i = 0; i < jeremiah_full_data.length; i++) {
                let t = verse_parser5(jeremiah_full_data[i], jeremiah_first_data[i], jeremiah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);

                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "lamentations":
            for(i = 0; i < lamentations_full_data.length; i++) {
                let t = verse_parser5(lamentations_full_data[i], lamentations_first_data[i], lamentations_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "ezekiel":
            for(i = 0; i < ezekiel_full_data.length; i++) {
                let t = verse_parser5(ezekiel_full_data[i], ezekiel_first_data[i], ezekiel_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "daniel":
            for(i = 0; i < daniel_full_data.length; i++) {
                let t = verse_parser5(daniel_full_data[i], daniel_first_data[i], daniel_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }         
            break;

        case "hosea":
            for(i = 0; i < hosea_full_data.length; i++) {
                let t = verse_parser5(hosea_full_data[i], hosea_first_data[i], hosea_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "joel":
            for(i = 0; i < joel_full_data.length; i++) {
                let t = verse_parser5(joel_full_data[i], joel_first_data[i], joel_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "amos":
            for(i = 0; i < amos_full_data.length; i++) {
                let t = verse_parser5(amos_full_data[i], amos_first_data[i], amos_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "obadiah":
            for(i = 0; i < obadiah_full_data.length; i++) {
                let t = verse_parser5(obadiah_full_data[i], obadiah_first_data[i], obadiah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "jonah":
            for(i = 0; i < jonah_full_data.length; i++) {
                let t = verse_parser5(jonah_full_data[i], jonah_first_data[i], jonah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "micah":
            for(i = 0; i < micah_full_data.length; i++) {
                let t = verse_parser5(micah_full_data[i], micah_first_data[i], micah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "nahum":
            for(i = 0; i < nahum_full_data.length; i++) {
                let t = verse_parser5(nahum_full_data[i], nahum_first_data[i], nahum_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "habakkuk":
            for(i = 0; i < habakkuk_full_data.length; i++) {
                let t = verse_parser5(habakkuk_full_data[i], habakkuk_first_data[i], habakkuk_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "zephaniah":
            for(i = 0; i < zephaniah_full_data.length; i++) {
                let t = verse_parser5(zephaniah_full_data[i], zephaniah_first_data[i], zephaniah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "haggai":
            for(i = 0; i < haggai_full_data.length; i++) {
                let t = verse_parser5(haggai_full_data[i], haggai_first_data[i], haggai_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "zechariah":
            for(i = 0; i < zechariah_full_data.length; i++) {
                let t = verse_parser5(zechariah_full_data[i], zechariah_first_data[i], zechariah_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "malachi":
            for(i = 0; i < malachi_full_data.length; i++) {
                let t = verse_parser5(malachi_full_data[i], malachi_first_data[i], malachi_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;
            
        case "matthew":
            for(i = 0; i < matthew_full_data.length; i++) {
                let t = verse_parser5(matthew_full_data[i], matthew_first_data[i], matthew_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "mark":
            for(i = 0; i < mark_full_data.length; i++) {
                let t = verse_parser5(mark_full_data[i], mark_first_data[i], mark_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "luke":
            for(i = 0; i < luke_full_data.length; i++) {
                let t = verse_parser5(luke_full_data[i], luke_first_data[i], luke_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "john":
            for(i = 0; i < john_full_data.length; i++) {
                let t = verse_parser5(john_full_data[i], john_first_data[i], john_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "acts":
            for(i = 0; i < acts_full_data.length; i++) {
                let t = verse_parser5(acts_full_data[i], acts_first_data[i], acts_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "romans":
            for(i = 0; i < romans_full_data.length; i++) {
                let t = verse_parser5(romans_full_data[i], romans_first_data[i], romans_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "corinthians1":
            for(i = 0; i < corinthians1_full_data.length; i++) {
                let t = verse_parser5(corinthians1_full_data[i], corinthians1_first_data[i], corinthians1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "corinthians2":
            for(i = 0; i < corinthians2_full_data.length; i++) {
                let t = verse_parser5(corinthians2_full_data[i], corinthians2_first_data[i], corinthians2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "galatians":
            for(i = 0; i < galatians_full_data.length; i++) {
                let t = verse_parser5(galatians_full_data[i], galatians_first_data[i], galatians_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "ephesians":
            for(i = 0; i < ephesian_full_data.length; i++) {
                let t = verse_parser5(ephesian_full_data[i], ephesian_first_data[i], ephesian_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "philippians":
            for(i = 0; i < philippians_full_data.length; i++) {
                let t = verse_parser5(philippians_full_data[i], philippians_first_data[i], philippians_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                
                //"chapter" holds chapter number of current verse for next cycle for comparison
                // to see if next verse is in current chapter or in the next chapter
                chapter = t[1];
            }
            break;

        case "colossians":
            for(i = 0; i < colossians_full_data.length; i++) {
                let t = verse_parser5(colossians_full_data[i], colossians_first_data[i], colossians_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "thessalonians1":
            for(i = 0; i < thessalonians1_full_data.length; i++) {
                let t = verse_parser5(thessalonians1_full_data[i], thessalonians1_first_data[i], thessalonians1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "thessalonians2":
            for(i = 0; i < thessalonians2_full_data.length; i++) {
                let t = verse_parser5(thessalonians2_full_data[i], thessalonians2_first_data[i], thessalonians2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "timothy1":
            for(i = 0; i < timothy1_full_data.length; i++) {
                let t = verse_parser5(timothy1_full_data[i], timothy1_first_data[i], timothy1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "timothy2":
            for(i = 0; i < timothy2_full_data.length; i++) {
                let t = verse_parser5(timothy2_full_data[i], timothy2_first_data[i], timothy2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "titus":
            for(i = 0; i < titus_full_data.length; i++) {
                let t = verse_parser5(titus_full_data[i], titus_first_data[i], titus_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "philemon":
            for(i = 0; i < philemon_full_data.length; i++) {
                let t = verse_parser5(philemon_full_data[i], philemon_first_data[i], philemon_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "hebrews":
            for(i = 0; i < hebrews_full_data.length; i++) {
                let t = verse_parser5(hebrews_full_data[i], hebrews_first_data[i], hebrews_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "james":
            for(i = 0; i < james_full_data.length; i++) {
                let t = verse_parser5(james_full_data[i], james_first_data[i], james_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "peter1":
            for(i = 0; i < peter1_full_data.length; i++) {
                let t = verse_parser5(peter1_full_data[i], peter1_first_data[i], peter1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "peter2":
            for(i = 0; i < peter2_full_data.length; i++) {
                let t = verse_parser5(peter2_full_data[i], peter2_first_data[i], peter2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "john1":
            for(i = 0; i < john1_full_data.length; i++) {
                let t = verse_parser5(john1_full_data[i], john1_first_data[i], john1_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "john2":
            for(i = 0; i < john2_full_data.length; i++) {
                let t = verse_parser5(john2_full_data[i], john2_first_data[i], john2_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "john3":
            for(i = 0; i < john3_full_data.length; i++) {
                let t = verse_parser5(john3_full_data[i], john3_first_data[i], john3_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            break;

        case "jude":
            for(i = 0; i < jude_full_data.length; i++) {
                let t = verse_parser5(jude_full_data[i], jude_first_data[i], jude_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            console.log('Jude');
            break;

        case "revelation":
            
            for(i = 0; i < revelation_full_data.length; i++) {
                let t = verse_parser5(revelation_full_data[i], revelation_first_data[i], revelation_blank_data[i], e.target.textContent, i, chapter);
                document.getElementById('full_content').insertAdjacentHTML('beforeend', t[0]);
                chapter = t[1];
            }
            console.log('Revelation');
            break;
    }

    
    
    let chapter_array = document.querySelectorAll('.chapter-div');

    document.getElementById('chapter_list_content').insertAdjacentHTML('beforeend', "<hr class='rounded'>");
    document.getElementById('chapter_list_content').insertAdjacentHTML('beforeend', "<div id='chapter-section-title'> CHAPTER LIST </div><br></br>");
    // Check if a book has more than one chapter. Jude and Titus have 1 chapter so link is not needed
    
    let quotient = 1;

    if(window.screen.width <= 365){
        quotient = 9;
    } else if(window.screen.width <= 900) {
        quotient = 9;
    } else {
        quotient = 11;
    }


    memory_title.textContent = "KJV Bible Memory: NORMAL";

    // Creates CHAPTER List area
    if(chapter_array.length > 1) {
        for(x=0; x < chapter_array.length; x++) {
           // let chapter_entry = "<a href='#" + (x+1) + "cc'" + ">" + chapter_array[x].textContent + "</a>&times&times;"
           let chapter_entry = "<a href='#cc" + (x+1) + "'" + ">" + (x+1) + "</a>&times&times;"
            if((x + 1) % quotient == "0") {chapter_entry = chapter_entry + "<br></br>";}
            document.getElementById('chapter_list_content').insertAdjacentHTML('beforeend', chapter_entry);
        }
    
    }
    document.getElementById('chapter_list_content').insertAdjacentHTML('beforeend', "<hr class='rounded'><br></br>");

    // BOOK NAME TITLE assignment
    title_h1_tag.textContent = e.target.textContent + ":";

    for (let el of document.querySelectorAll('.first_letter_verse_div')) el.style.display = 'none';

    for (let el of document.querySelectorAll('.blank_verse_div')) el.style.display = 'none';

    let eel = document.getElementById("chapter_list_content");
    eel.style.visibility = 'hidden';
    e.stopImmediatePropagation();
}

// Toggles verses in normal screen mode(Non-auto cycle mode)
function toggleVerse(e) {

    //e.stopPropagation();
    e.stopImmediatePropagation();


    let parent = e.target.parentElement;
    let grandparent = parent.parentElement;
    let grandparent2 = grandparent.nextSibling;

    let grandparent3 = grandparent2.nextSibling;
    

    if(e.target.tagName == 'H3') {
        console.log('H3 to activate CYCLE MODE ..');

        div.style.display = "none";

        div3.style.display = "none";

        back_div.style.display = "inline";

        let child_list = grandparent.children;
        
        let t0 = child_list[0].textContent;
        let t1 = "<p class='full_modal_content'>" + child_list[1].textContent + "</p>";
        let t2 = "<p class='first_modal_content'>" + child_list[2].textContent + "</p>";
        let t3 = "<p class='blank_modal_content'>" + child_list[3].textContent + "</p>";
        

        let ticker = 30; // To hold value in seconds of the length for each of the 3 transitions (full, 1st letter, blank)
        let ticker2 = 1400; // Approximate time before cycling stops in seconds      
        let time_elapsed = 0;
        let cycle_count = 1;

        
        let t = verse_parser6(t1, t2, t3, t0, 'verse-mode');
        document.getElementById('version_mode_content').insertAdjacentHTML('beforeend', t);


        document.getElementById('version_mode_content').insertAdjacentHTML('beforeend', "<br><span class='counter' id='counter'></span>");
        let counter_elem = document.getElementById('counter');
        counter_elem.textContent = ticker;

        if(grandparent2 && grandparent2.tagName == "DIV") {
            let child_list2 = grandparent2.children;
            t0 = child_list2[0].textContent;
            t1 = "<p class='full_modal_content'>" + child_list2[1].textContent + "</p>";
            t2 = "<p class='first_modal_content'>" + child_list2[2].textContent + "</p>";
            t3 = "<p class='blank_modal_content'>" + child_list2[3].textContent + "</p>";

            t = verse_parser6(t1, t2, t3, t0, 'verse-mode');
            document.getElementById('version_mode_content').insertAdjacentHTML('beforeend', t);
        }

        if(grandparent3 && grandparent3.tagName == "DIV") {
            let child_list3 = grandparent3.children;

            t0 = child_list3[0].textContent;
            t1 = "<p class='full_modal_content'>" + child_list3[1].textContent + "</p>";
            t2 = "<p class='first_modal_content'>" + child_list3[2].textContent + "</p>";
            t3 = "<p class='blank_modal_content'>" + child_list3[3].textContent + "</p>";

            t = verse_parser6(t1, t2, t3, t0, 'verse-mode');
            document.getElementById('version_mode_content').insertAdjacentHTML('beforeend', t);
        }

        let checker = 1; // Switch to show full, 1st letter or blank verse mode. Starts full
        let el1 = document.getElementsByClassName('full_modal_content');
        let el2 = document.getElementsByClassName('first_modal_content');
        let el3 = document.getElementsByClassName('blank_modal_content');

        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count;  

        let idTimer = setInterval(() => {
           
            // Checks if cycle mode on and if not, should stop idTimer
            if(document.getElementById('back-div').style.display == "none" ) {
                ticker = 0;
                ticker2 = 0;
                checker = 0;
                //console.log('stopping idTimer...');
                //clearInterval(idTimer);
            }

            // if ticker is 0 means time is up for current cycle case and new case needs to be chosen
            if(ticker <= 0) {
                switch(checker) {
                    case 1: 
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 1";                   
                        console.log('case 1: full 1st');
                        verse_hider(el1, 'inline');
                        verse_hider(el2, 'inline');
                        verse_hider(el3, 'none');
                        ticker = 90;
                        ticker2 = ticker2 - 90;
                        checker = 2;
                        break;
                    case 2:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 2";                   
                        console.log('case 2: full');
                        verse_hider(el1, 'inline');
                        verse_hider(el2, 'none');
                        verse_hider(el3, 'none');
                        ticker = 30;
                        ticker2 = ticker2 - 30;
                        checker = 3;
                        break;
                    case 3:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 3";                   
                        console.log('case 3: full 1st');
                        verse_hider(el1, 'inline');
                        verse_hider(el2, 'inline');
                        verse_hider(el3, 'none');
                        ticker = 30;
                        ticker2 = ticker2 - 30;
                        checker = 4;
                        break;
                    case 4:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 4";                   
                        console.log('case 4: 1st');
                        verse_hider(el1, 'none');
                        verse_hider(el2, 'inline');
                        verse_hider(el3, 'none');
                        ticker = 40;
                        ticker2 = ticker2 - 40;
                        checker = 5;
                        break;
                    case 5:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 5";                   
                        console.log('case 5: 1st blank');
                        verse_hider(el1, 'none');
                        verse_hider(el2, 'inline');
                        verse_hider(el3, 'inline');
                        ticker = 30;
                        ticker2 = ticker2 - 30;
                        checker = 6;
                        break;
                    case 6:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 6";                   
                        console.log('case 6: full blank');
                        verse_hider(el1, 'inline');
                        verse_hider(el2, 'none');
                        verse_hider(el3, 'inline');
                        ticker = 40;
                        ticker2 = ticker2 - 40;
                        checker = 7;
                        break;
                    case 7:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 7";                   
                        console.log('case 7: 1st blank');
                        verse_hider(el1, 'none');
                        verse_hider(el2, 'inline');
                        verse_hider(el3, 'inline');
                        ticker = 40;
                        ticker2 = ticker2 - 40;
                        checker = 8;
                        break;
                    case 8:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 8";                   
                        console.log('case 8: blank');
                        verse_hider(el1, 'none');
                        verse_hider(el2, 'none');
                        verse_hider(el3, 'inline');
                        ticker = 50;
                        ticker2 = ticker2 - 50;
                        checker = 9;
                        break;
                    case 9:
                        memory_title.textContent = "KJV Bible Memory: CYCLE " + cycle_count + ": Case 9";                   
                        console.log('case 9: 1st blank');
                        if(ticker2 > 0) {
                            verse_hider(el1, 'none');
                            verse_hider(el2, 'inline');
                            verse_hider(el3, 'inline');
                            ticker = 40;
                            ticker2 = ticker2 - 40;
                            checker = 1;
                            cycle_count++;
                        } else {
                            checker = 0;
                            ticker = 0;
                            ticker2 = 0;
                        } 
                        break;
                    default:
                        verse_hider(el1, 'inline');
                        verse_hider(el2, 'none');
                        verse_hider(el3, 'none');
                        ticker = 0; // MAY not need this line
                        ticker2 = 0;
                        checker = 0;
                        console.log('default case **');
                        console.log('stopping idTimer ...');
                        if(time_elapsed / 60 >= 1 ) {
                            console.log(time_elapsed);
                           // let tt = ((time_elapsed - (time_elapsed / 60)) / 60);
                          //  console.log("FULL TIME ELAPSED in minutes: " + (tt - (tt % 1)));
                          console.log("FULL TIME ELAPSED in minutes: " + (time_elapsed - (time_elapsed / 60)) / 60);
                        }
                        console.log("FULL TIME ELAPSED in seconds: " + time_elapsed);
                        clearInterval(idTimer);
                        break;
                }

            }

            /*
            console.log("count");
            console.log(ticker);
            console.log(checker);
            console.log("--------------"); */
            
            ticker--; // decrement by 1 second. decrements until current case is over
            time_elapsed++;
            if(time_elapsed % 60 == 0) { console.log(time_elapsed / 60 + " minute(s) elapsed"); }

            if(ticker < 0) { ticker = 0;} // if ticker for some reason goes under 0. Keeps it at 0 and over

            counter_elem.textContent = ticker;
        }, 1000);
  

    } else if(e.target.tagName == 'DIV') { // For manual change for full, 1st letter or blank content in NORMAL mode
        console.log('DIV activating Manual Mode change...');

        let el1 = document.getElementsByClassName('full_verse_div');
        let el2 = document.getElementsByClassName('first_letter_verse_div');
        let el3 = document.getElementsByClassName('blank_verse_div');

        switch(e.target.className) {
            case 'full_verse_div':
                console.log('full manual content..');
                verse_hider(el1, 'none');
                verse_hider(el2, 'inline');
                verse_hider(el3, 'none'); 
                break;   
            case 'first_letter_verse_div':
                console.log('first letter manual content..');
                verse_hider(el1, 'none');
                verse_hider(el2, 'none');
                verse_hider(el3, 'inline'); 
                break;      
            case 'blank_verse_div':
                console.log('blank manual content..');
                verse_hider(el1, 'inline');
                verse_hider(el2, 'none');
                verse_hider(el3, 'none'); 
                break; 
            default:
                /*
                if(el1[0].) {

                } else if() {

                } else if() {

                }  */
                console.log('default case manual content... Do nothing!')
                break;


        }

        
    }
}

// Hides or Reveals verse in Verse cycle mode
function verse_hider(c_list, mode_switch) {
    for (i = 0; i < c_list.length; i++) {
        c_list[i].style.display = mode_switch;
    }
}


function toggleModal(e) {
    e.preventDefault();
    //e.stopPropagation();
    e.stopImmediatePropagation();

    // For closing modal after selecting modal surroundings
    window.addEventListener("click", windowOnClick);

    let t1 = "";
    let t2 = "";
    let t3 = "";
    let t4 = "";

    //console.log("before toggle if statement");

    // For preparing ABOUT MODAL from Main Menu
    if(e.target.id == 'about') {

        console.log('about modal');

        t1 = "<div><h2>KJV Bible Memory</h2></div><hr class='rounded'>";
        t2 = "<h5>KJV Bible Memory version 1.0</h5><h4><u>Contact Info:</u> </h4><h4>DESIGNER: Curtis Taylor</h4>";
        t3 = "<p id='about-info'><a href='mailto:curtis.t@gmail.com'><img src='images/fancy_mail.png' alt='curtis.t@gmail.com'/></a><br></br><a href='https://www.linkedin.com/in/curtis-taylor-developer-qa-tester-84964a10/'><img src='images/LI-In-Bug.png' alt='https://www.linkedin.com/in/curtis-taylor-developer-qa-tester-84964a10/'/></a></p><hr class='rounded'>";
        t4 = "<footer> Created 2021    </footer>";
       
        modal_h1_div.innerHTML = t1 + t2 + t3 + t4;

        modal_content.append(modal_h1_div);

        modal.classList.toggle("show-modal");  
        
    } 
    // For preparing HELP MODAL from Main Menu
    else if(e.target.id == 'help') {
        //e.stopPropagation();
        console.log('help modal');
        t1 = "<div><h2>HELP</h2></div><hr class='rounded'>";

        t2 = "<p id='help-info'><img src='images/help-1c.png'/></p><hr class='rounded'>"; 

        modal_h1_div.innerHTML = t1 + t2 + t3;

        modal_content.append(modal_h1_div);
       
        modal.classList.toggle("show-modal");  
    }
    // Close button for displayed modal(either ABOUT or HELP)
    else if(e.target.className == 'close-button') {
        //e.stopPropagation();
        modal.classList.toggle("show-modal"); 
        console.log("close modal");
        
        window.removeEventListener("click", windowOnClick);
    } 
    // For outside of modal click in order to close modal
    else if(e.target.className == 'modal show-modal') {
        //e.stopPropagation();
        modal.classList.toggle("show-modal"); 
        console.log(e.target.textContent);
        console.log(e.target);
        window.removeEventListener("click", windowOnClick);
    } 
    else {
        //e.stopPropagation();
        console('Default Toggle Modal Else statement: Do nothing');
        //console.log(e.target);
        //console.log(e.target.className);
    }   
}


function windowOnClick(e) {
   //e.preventDefault();
   e.stopPropagation();
   e.stopImmediatePropagation();
   console.log('windowOnClick function before verification');

   // console.log(e.target);
   if (e.target.className === 'modal show-modal') {
        console.log('windowOnClick close: after varification');
        toggleModal(e);
   }
}


//Used to create verse divs for Verse cycle mode
function verse_parser6(elem, elem2, elem3, name, i) {
    let s = elem.split(' ');
    let data = "<div class='" + i + "'><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><br></br><div class='full_verse_div'>" + elem + "</div><hr class='rounded'><div class='first_letter_verse_div'>" + elem2 + "</div><hr class='rounded'><div class='blank_verse_div'>" + elem3 + "</div></div>";
    return data;
}

// Used to create Normal verse divs
function verse_parser5(elem, elem2, elem3, name, i, chapter) {
    // s variable to split verse in order to get 1st chunk that is the verse number
    let s = elem.split(' ');
    let s2 = elem.split(':');
    let chapter_name

    // Switch statement Used to decide what to display for Chapter name element
    switch(name) {
        case "Psalms":
            chapter_name = "PSALM";
            break;
        case "Jude":
            chapter_name = "";
            break;
        case "Obadiah":
            chapter_name = "";
            break;
        case "Philemon":
            chapter_name = "";
            break;
        case "2nd John":
            chapter_name = "";
            break;
        case "3rd John":
            chapter_name = "";
            break;
        default:
            chapter_name = "CHAPTER";
            break;
    }

    // Checks if chapter(previous verse) is in the same chapter as s2[0](the current verse)
    let data ="";
    let temp = []; // declare temp

    if(s2[0] == chapter) {
         data = "<div class='dynamic-div' id='" + (i + 1) +  "'><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><div class='full_verse_div'>" + elem + "</div><div class='first_letter_verse_div'>" + elem2 + "</div><div class='blank_verse_div'>" + elem3 + "</div></div>";
         temp = [data, s2[0]]; // add value to temp
    } else {
        if(chapter_name == "" && chapter == "0") {
           // let data = "<section class='chapter-div'><p id='cc" + s2[0] +  "'>" + chapter_name + "</p></section><div class='dynamic-div' id=" + (i+1) +  "><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><div class='full_verse_div'>" + elem + "</div><div class='first_letter_verse_div'>" + elem2 + "</div><div class='blank_verse_div'>" + elem3 + "</div></div>"; 
            data = "<p class='chapter-div' id='cc" + s2[0] +  "'>" + chapter_name + "</p><div class='dynamic-div' id=" + (i+1) +  "><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><div class='full_verse_div'>" + elem + "</div><div class='first_letter_verse_div'>" + elem2 + "</div><div class='blank_verse_div'>" + elem3 + "</div></div>"; 
        } 
        else if(chapter == "0") {
           // let data = "<section class='chapter-div'><p id='cc" + s2[0] +  "'>" + chapter_name + " " + s2[0] + "</p></section><div class='dynamic-div' id='" + (i+1) +  "'><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><div class='full_verse_div'>" + elem + "</div><div class='first_letter_verse_div'>" + elem2 + "</div><div class='blank_verse_div'>" + elem3 + "</div></div>";
            data = "<p class='chapter-div' id='cc" + s2[0] +  "'>" + chapter_name + " " + s2[0] + "</p><div class='dynamic-div' id='" + (i+1) +  "'><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><div class='full_verse_div'>" + elem + "</div><div class='first_letter_verse_div'>" + elem2 + "</div><div class='blank_verse_div'>" + elem3 + "</div></div>";
        } else {
            data = "<br></br><br></br><p class='chapter-div' id='cc" + s2[0] + "'>" + chapter_name + " " + s2[0] + "</p><div class='dynamic-div' id='" + (i+1) +  "'><a href='#' class='dynamic-a'><h3>" + name + " " + s[0] + "</h3></a><div class='full_verse_div'>" + elem + "</div><div class='first_letter_verse_div'>" + elem2 + "</div><div class='blank_verse_div'>" + elem3 + "</div></div>";
        }
        temp = [data, s2[0]]; // add value to temp
    }

    return temp; // returns array of 1)html string and 2)numerical string
}




