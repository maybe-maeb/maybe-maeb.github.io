//Anonymous function that runs right away and avoids polluting the global namespace
(() => {
    const Filters = (props) => {

        let updateLang = (clickEvent) => {
            props.updateFormState({
                lang: clickEvent.target.value,
            });
        }
        let updateMinRelYear = (clickEvent) => {
            props.updateFormState({
                minRelYear: clickEvent.target.value,
            });
        }
        let updateMaxRelYear = (clickEvent) => {
            props.updateFormState({
                maxRelYear: clickEvent.target.value,
            });
        }
        let updateMinCopies = (clickEvent) => {
            props.updateFormState({
                minCopies: clickEvent.target.value,
            });
        }
        let updateMaxCopies = (clickEvent) => {
            props.updateFormState({
                maxCopies: clickEvent.target.value,
            });
        }
        let updateGenre = (clickEvent) => {
            props.updateFormState({
                genre: clickEvent.target.value,
            });
        }
        let updateMinPageCount = (clickEvent) => {
            props.updateFormState({
                minPageCount: clickEvent.target.value,
            });
        }
        let updateMaxPageCount = (clickEvent) => {
            props.updateFormState({
                maxPageCount: clickEvent.target.value,
            });
        }

        return (
            <React.Fragment>
                <p>Filter your data:</p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <b className="filterLabel">Genre</b>
                            <br></br>
                            <select class="select" onChange={updateGenre}>
                                <option value=''>&nbsp;</option>
                                <option value='Adventure'>Adventure</option>
                                <option value='Biography'>Biography</option>
                                <option value='Business'>Business</option>
                                <option value='Childrens'>Children's</option>
                                <option value='Christian Literature'>Christian Literature</option>
                                <option value='Comedy'>Comedy</option>
                                <option value='Coming Of Age'>Coming of Age</option>
                                <option value='Crime'>Crime</option>
                                <option value='Detective'>Detective</option>
                                <option value='Dystopian'>Dystopian</option>
                                <option value='Erotica'>Erotica</option>
                                <option value='Espionage'>Espionage</option>
                                <option value='Essay'>Essay</option>
                                <option value='Family Saga'>Family Saga</option>
                                <option value='Fantasy'>Fantasy</option>
                                <option value='Feminist Novel'>Feminist Novel</option>
                                <option value='Gothic'>Gothic</option>
                                <option value='Historical Fiction'>Historical Fiction</option>
                                <option value='Horror'>Horror</option>
                                <option value='Magic Realism'>Magic Realism</option>
                                <option value='Manual'>Manual</option>
                                <option value='Memoir'>Memoir</option>
                                <option value='Mystery'>Mystery</option>
                                <option value='Novel'>Novel</option>
                                <option value='Novella'>Novella</option>
                                <option value='Philosophy'>Philosophy</option>
                                <option value='Philosophy'>Philosophy</option>
                                <option value='Poem'>Poem</option>
                                <option value='Politics'>Politics</option>
                                <option value='Pregnancy Guide'>Pregnancy Guide</option>
                                <option value='Realism'>Realism</option>
                                <option value='Recipes'>Recipes</option>
                                <option value='Romance'>Romance</option>
                                <option value='Satire'>Satire</option>
                                <option value='Science Fiction'>Science Fiction</option>
                                <option value='Science'>Science</option>
                                <option value='SelfHelp'>Self-Help</option>
                                <option value='Semi-autobiographical novel'>Semi-Autobiographical Novel</option>
                                <option value='Sexology'>Sexology</option>
                                <option value='Short Stories'>Short Stories</option>
                                <option value='Spiritual'>Spiritual</option>
                                <option value='Thriller'>Thriller</option>
                                <option value='Tragedy'>Tragedy</option>
                                <option value='Travel Literature'>Travel Literature</option>
                                <option value='War'>War</option>
                                <option value='YA'>YA</option>
                            </select>
                        </div>

                        <div className='col-xl-3'>
                            <b className="filterLabel">Language</b>
                            <br></br>
                            <select class="select" onChange={updateLang}>
                                <option value=''>&nbsp;</option>
                                <option value='Chinese'>Chinese</option>
                                <option value='Czech'>Czech</option>
                                <option value='Dutch'>Dutch</option>
                                <option value='English'>English</option>
                                <option value='French'>French</option>
                                <option value='German'>German</option>
                                <option value='Gujarati'>Gujarati</option>
                                <option value='Hindi'>Hindi</option>
                                <option value='Italian'>Italian</option>
                                <option value='Japanese'>Japanese</option>
                                <option value='Norwegian'>Norwegian</option>
                                <option value='Portugese'>Portugese</option>
                                <option value='Russian'>Russian</option>
                                <option value='Spanish'>Spanish</option>
                                <option value='Swedish'>Swedish</option>
                                <option value='Yiddish'>Yiddish</option>
                            </select>
                        </div>

                        <div className='col-xl-3'>
                            <b className="filterLabel">Min Amount of Copies Sold (in millions)</b>
                            <br></br>
                            <input type="number" min="0" class="select" onChange={updateMinCopies}></input>
                        </div>
                        <div className='col-xl-3'>
                            <b className="filterLabel">Max Amount of Copies Sold (in millions)</b>
                            <br></br>
                            <input type="number" min="0" class="select" onChange={updateMaxCopies}></input>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <b className="filterLabel">Min Page Count</b>
                            <br></br>
                            <input type="number" min="0" class="select" onChange={updateMinPageCount}></input>
                        </div>
                        <div className='col-xl-3'>
                            <b className="filterLabel">Max Page Count</b>
                            <br></br>
                            <input type="number" min="0" class="select" onChange={updateMaxPageCount}></input>
                        </div>
                        <div className='col-xl-3'>
                            <b className="filterLabel">Min Release Year</b>
                            <br></br>
                            <input type="number" min="0" max="2023" class="select" onChange={updateMinRelYear}></input>
                        </div>
                        <div className='col-xl-3'>
                            <b className="filterLabel">Max Release Year</b>
                            <br></br>
                            <input type="number" min="0" max="2023" class="select" onChange={updateMaxRelYear}></input>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    //For testing empty arrays
    const empty = [{}];

    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody><tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Language</th>
                        <th>Release Year</th>
                        <th>Copies Sold (millions)</th>
                        <th>Genre</th>
                        <th>Page Count</th>
                    </tr>

                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.title}</td>
                                    <td>{row.author}</td>
                                    <td>{row.lang}</td>
                                    <td>{row.relyear}</td>
                                    <td>{row.copies}</td>
                                    <td>{row.genre}</td>
                                    <td>{row.pagecount}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );
    }

    const bookData = [
        {
            "title": "A Tale of Two Cities",
            "author": "Charles Dickens",
            "lang": "English",
            "relyear": 1859,
            "copies": 200,
            "genre": "Historical Fiction",
            "pagecount": 448,
            "source": ""
        },
        {
            "title": "The Little Prince",
            "author": "Antoine de Saint-Exupéry",
            "lang": "French",
            "relyear": 1943,
            "copies": 200,
            "genre": "Children's",
            "pagecount": 96,
            "source": ""
        },
        {
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 1997,
            "copies": 120,
            "genre": "Fantasy",
            "pagecount": 223,
            "source": ""
        },
        {
            "title": "And Then There Were None",
            "author": "Agatha Christie",
            "lang": "English",
            "relyear": 1939,
            "copies": 100,
            "genre": "Mystery",
            "pagecount": 272,
            "source": ""
        },
        {
            "title": "Dream of the Red Chamber",
            "author": "Cao Xeuqin",
            "lang": "Chinese",
            "relyear": 1791,
            "copies": 100,
            "genre": "Family saga",
            "pagecount": 826,
            "source": ""
        },
        {
            "title": "The Hobbit",
            "author": "JRR Tolkein",
            "lang": "English",
            "relyear": 1937,
            "copies": 100,
            "genre": "Fantasy",
            "pagecount": 300,
            "source": ""
        },
        {
            "title": "The Lion, The Witch, and the Wardrobe",
            "author": "CS Lewis",
            "lang": "English",
            "relyear": 1950,
            "copies": 85,
            "genre": "Children's",
            "pagecount": 194,
            "source": ""
        },
        {
            "title": "She: A History of Adventure",
            "author": "H Rider Haggard",
            "lang": "English",
            "relyear": 1887,
            "copies": 83,
            "genre": "Adventure",
            "pagecount": 359,
            "source": ""
        },
        {
            "title": "Vardi Wala Gunda",
            "author": "Ved Prakesh Sharma",
            "lang": "Hindi",
            "relyear": 1992,
            "copies": 80,
            "genre": "Detective",
            "pagecount": 347,
            "source": ""
        },
        {
            "title": "The Da Vinci Code",
            "author": "Dan Brown",
            "lang": "English",
            "relyear": 2003,
            "copies": 80,
            "genre": "Mystery",
            "pagecount": 689,
            "source": ""
        },
        {
            "title": "Harry Potter and the Chamber of Secrets",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 1998,
            "copies": 77,
            "genre": "Fantasy",
            "pagecount": 341,
            "source": ""
        },
        {
            "title": "Harry Potter and the Prisoner of Azkaban",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 1999,
            "copies": 65,
            "genre": "Fantasy",
            "pagecount": 448,
            "source": ""
        },
        {
            "title": "Harry Potter and the Goblet of Fire",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 2000,
            "copies": 65,
            "genre": "Fantasy",
            "pagecount": 752,
            "source": ""
        },
        {
            "title": "Harry Potter and the Order of the Phoenix",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 2003,
            "copies": 65,
            "genre": "Fantasy",
            "pagecount": 896,
            "source": ""
        },
        {
            "title": "Harry Potter and the Half-Blood Prince",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 2005,
            "copies": 65,
            "genre": "Fantasy",
            "pagecount": 672,
            "source": ""
        },
        {
            "title": "Harry Potter and the Deathly Hallows",
            "author": "JK Rowling",
            "lang": "English",
            "relyear": 2007,
            "copies": 65,
            "genre": "Fantasy",
            "pagecount": 759,
            "source": ""
        },
        {
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "lang": "Portugese",
            "relyear": 1988,
            "copies": 65,
            "genre": "Fantasy",
            "pagecount": 163,
            "source": ""
        },
        {
            "title": "The Catcher in the Rye",
            "author": "JD Salinger",
            "lang": "English",
            "relyear": 1951,
            "copies": 65,
            "genre": "Coming of Age",
            "pagecount": 234,
            "source": ""
        },
        {
            "title": "The Bridges in Madison County",
            "author": "Robert James Waller",
            "lang": "English",
            "relyear": 1992,
            "copies": 60,
            "genre": "Romance",
            "pagecount": 192,
            "source": ""
        },
        {
            "title": "Ben-Hur: A Tale of the Christ",
            "author": "Lew Wallace",
            "lang": "English",
            "relyear": 1880,
            "copies": 50,
            "genre": "Historical Fiction",
            "pagecount": 441,
            "source": ""
        },
        {
            "title": "You Can Heal Your Life",
            "author": "Louise Hay",
            "lang": "English",
            "relyear": 1984,
            "copies": 50,
            "genre": "Self-help",
            "pagecount": 272,
            "source": ""
        },
        {
            "title": "One Hundred Years of Solitude",
            "author": "Gabriel Garcia Marquez",
            "lang": "Spanish",
            "relyear": 1967,
            "copies": 50,
            "genre": "Magic Realism",
            "pagecount": 417,
            "source": ""
        },
        {
            "title": "Lolita",
            "author": "Vladimir Nabokov",
            "lang": "English",
            "relyear": 1955,
            "copies": 50,
            "genre": "Novel",
            "pagecount": 317,
            "source": ""
        },
        {
            "title": "Heidi",
            "author": "Johanna Spyri",
            "lang": "German",
            "relyear": 1880,
            "copies": 50,
            "genre": "Children's",
            "pagecount": 352,
            "source": ""
        },
        {
            "title": "The Common Sense Book of Baby and Child Care",
            "author": "Benjamin Spock",
            "lang": "English",
            "relyear": 1946,
            "copies": 50,
            "genre": "Manual",
            "pagecount": 627,
            "source": ""
        },
        {
            "title": "Anne of Green Gables",
            "author": "Lucy Maud Montgomery",
            "lang": "English",
            "relyear": 1908,
            "copies": 50,
            "genre": "Children's",
            "pagecount": 336,
            "source": ""
        },
        {
            "title": "Black Beauty",
            "author": "Anna Sewell",
            "lang": "English",
            "relyear": 1877,
            "copies": 50,
            "genre": "Children's",
            "pagecount": 206,
            "source": ""
        },
        {
            "title": "The Name of the Rose",
            "author": "Umberto Eco",
            "lang": "Italian",
            "relyear": 1980,
            "copies": 50,
            "genre": "Mystery",
            "pagecount": 517,
            "source": ""
        },
        {
            "title": "The Eagle Has Landed",
            "author": "Jack Higgins",
            "lang": "English",
            "relyear": 1975,
            "copies": 50,
            "genre": "War",
            "pagecount": 368,
            "source": ""
        },
        {
            "title": "Watership Down",
            "author": "Richard Adams",
            "lang": "English",
            "relyear": 1972,
            "copies": 50,
            "genre": "Fantasy",
            "pagecount": 496,
            "source": ""
        },
        {
            "title": "The Hite Report",
            "author": "Shere Hite",
            "lang": "English",
            "relyear": 1976,
            "copies": 50,
            "genre": "Sexology",
            "pagecount": 478,
            "source": ""
        },
        {
            "title": "Charlotte's Web",
            "author": "EB White",
            "lang": "English",
            "relyear": 1952,
            "copies": 50,
            "genre": "Children's",
            "pagecount": 192,
            "source": ""
        },
        {
            "title": "The Ginger Man",
            "author": "JP Donleavy",
            "lang": "English",
            "relyear": 1955,
            "copies": 50,
            "genre": "Novel",
            "pagecount": 368,
            "source": ""
        },
        {
            "title": "The Tale of Peter Rabbit",
            "author": "Beatrix Potter",
            "lang": "English",
            "relyear": 1902,
            "copies": 45,
            "genre": "Children's",
            "pagecount": 72,
            "source": ""
        },
        {
            "title": "Jonathan Livingston Seagull",
            "author": "Richard Bach",
            "lang": "English",
            "relyear": 1970,
            "copies": 44,
            "genre": "Self-Help",
            "pagecount": 144,
            "source": ""
        },
        {
            "title": "The Very Hungry Caterpillar",
            "author": "Eric Carle",
            "lang": "English",
            "relyear": 1969,
            "copies": 43,
            "genre": "Children's",
            "pagecount": 32,
            "source": ""
        },
        {
            "title": "A Message to Garcia",
            "author": "Elbert Hubbard",
            "lang": "English",
            "relyear": 1899,
            "copies": 40,
            "genre": "Essay",
            "pagecount": 26,
            "source": ""
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "lang": "English",
            "relyear": 1960,
            "copies": 40,
            "genre": "Gothic",
            "pagecount": 384,
            "source": ""
        },
        {
            "title": "Flowers in the Attic",
            "author": "V. C. Andrews",
            "lang": "English",
            "relyear": 1979,
            "copies": 40,
            "genre": "Horror",
            "pagecount": 400,
            "source": ""
        },
        {
            "title": "Cosmos",
            "author": "Carl Sagan",
            "lang": "English",
            "relyear": 1980,
            "copies": 40,
            "genre": "Science",
            "pagecount": 365,
            "source": ""
        },
        {
            "title": "Sophie's World (Sofies verden)",
            "author": "Jostein Gaarder",
            "lang": "Norwegian",
            "relyear": 1991,
            "copies": 40,
            "genre": "Philosophy",
            "pagecount": 544,
            "source": ""
        },
        {
            "title": "Angels & Demons",
            "author": "Dan Brown",
            "lang": "English",
            "relyear": 2000,
            "copies": 39,
            "genre": "Mystery",
            "pagecount": 496,
            "source": ""
        },
        {
            "title": "Kane and Abel",
            "author": "Jeffrey Archer",
            "lang": "English",
            "relyear": 1979,
            "copies": 37,
            "genre": "Novel",
            "pagecount": 656,
            "source": ""
        },
        {
            "title": "How the Steel Was Tempered (Как закалялась сталь)",
            "author": "Nikolai Ostrovsky",
            "lang": "Russian",
            "relyear": 1932,
            "copies": 36.4,
            "genre": "Novel",
            "pagecount": 198,
            "source": ""
        },
        {
            "title": "War and Peace (Война и мир)",
            "author": "Leo Tolstoy",
            "lang": "Russian",
            "relyear": 1869,
            "copies": 36,
            "genre": "Historical Fiction",
            "pagecount": 1200,
            "source": ""
        },
        {
            "title": "The Adventures of Pinocchio (Le avventure di Pinocchio)",
            "author": "Carlo Collodi",
            "lang": "Italian",
            "relyear": 1881,
            "copies": 35,
            "genre": "Fantasy",
            "pagecount": 188,
            "source": ""
        },
        {
            "title": "The Diary of Anne Frank (Het Achterhuis)",
            "author": "Anne Frank",
            "lang": "Dutch",
            "relyear": 1947,
            "copies": 35,
            "genre": "Historical Non-Fiction",
            "pagecount": 283,
            "source": ""
        },
        {
            "title": "Your Erroneous Zones",
            "author": "Wayne Dyer",
            "lang": "English",
            "relyear": 1976,
            "copies": 35,
            "genre": "Self-Help",
            "pagecount": 256,
            "source": ""
        },
        {
            "title": "The Thorn Birds",
            "author": "Colleen McCullough",
            "lang": "English",
            "relyear": 1977,
            "copies": 33,
            "genre": "Romance",
            "pagecount": 692,
            "source": ""
        },
        {
            "title": "The Purpose Driven Life",
            "author": "Rick Warren",
            "lang": "English",
            "relyear": 2002,
            "copies": 33,
            "genre": "Christian literature",
            "pagecount": 368,
            "source": ""
        },
        {
            "title": "The Kite Runner",
            "author": "Khaled Hosseini",
            "lang": "English",
            "relyear": 2003,
            "copies": 31.5,
            "genre": "Historical Fiction",
            "pagecount": 372,
            "source": ""
        },
        {
            "title": "Valley of the Dolls",
            "author": "Jacqueline Susann",
            "lang": "English",
            "relyear": 1966,
            "copies": 31,
            "genre": "Novel",
            "pagecount": 448,
            "source": ""
        },
        {
            "title": "Alcoholics Anonymous Big Book",
            "author": "Bill Wilson",
            "lang": "English",
            "relyear": 1939,
            "copies": 30,
            "genre": "Self-help",
            "pagecount": 400,
            "source": ""
        },
        {
            "title": "How to Win Friends and Influence People",
            "author": "Dale Carnegie",
            "lang": "English",
            "relyear": 1936,
            "copies": 30,
            "genre": "Self-help",
            "pagecount": 320,
            "source": ""
        },
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "lang": "English",
            "relyear": 1925,
            "copies": 30,
            "genre": "Tragedy",
            "pagecount": 208,
            "source": ""
        },
        {
            "title": "Gone with the Wind",
            "author": "Margaret Mitchell",
            "lang": "English",
            "relyear": 1936,
            "copies": 30,
            "genre": "Historical Fiction",
            "pagecount": 1037,
            "source": ""
        },
        {
            "title": "Rebecca",
            "author": "Daphne du Maurier",
            "lang": "English",
            "relyear": 1938,
            "copies": 30,
            "genre": "Gothic",
            "pagecount": 428,
            "source": ""
        },
        {
            "title": "Nineteen Eighty-Four",
            "author": "George Orwell",
            "lang": "English",
            "relyear": 1949,
            "copies": 30,
            "genre": "Dystopian",
            "pagecount": 328,
            "source": ""
        },
        {
            "title": "The Revolt of Mamie Stover",
            "author": "William Bradford Huie",
            "lang": "English",
            "relyear": 1951,
            "copies": 30,
            "genre": "Fiction",
            "pagecount": 248,
            "source": ""
        },
        {
            "title": "The Girl with the Dragon Tattoo (Män som hatar kvinnor)",
            "author": "Stieg Larsson",
            "lang": "Swedish",
            "relyear": 2005,
            "copies": 30,
            "genre": "Fiction",
            "pagecount": 672,
            "source": ""
        },
        {
            "title": "The Lost Symbol",
            "author": "Dan Brown",
            "lang": "English",
            "relyear": 2009,
            "copies": 30,
            "genre": "Fiction",
            "pagecount": 528,
            "source": ""
        },
        {
            "title": "The Hunger Games",
            "author": "Suzanne Collins",
            "lang": "English",
            "relyear": 2008,
            "copies": 29,
            "genre": "YA",
            "pagecount": 374,
            "source": ""
        },
        {
            "title": "James and the Giant Peach",
            "author": "Roald Dahl",
            "lang": "English",
            "relyear": 1961,
            "copies": 28,
            "genre": "Children's",
            "pagecount": 160,
            "source": ""
        },
        {
            "title": "The Young Guard (Молодая гвардия)",
            "author": "Alexander Alexandrovich Fadeyev",
            "lang": "Russian",
            "relyear": 1945,
            "copies": 26,
            "genre": "YA",
            "pagecount": 720,
            "source": ""
        },
        {
            "title": "Who Moved My Cheese?",
            "author": "Spencer Johnson",
            "lang": "English",
            "relyear": 1998,
            "copies": 29,
            "genre": "Self-Help",
            "pagecount": 94,
            "source": ""
        },
        {
            "title": "A Brief History of Time",
            "author": "Stephen Hawking",
            "lang": "English",
            "relyear": 1988,
            "copies": 25,
            "genre": "Science",
            "pagecount": 256,
            "source": ""
        },
        {
            "title": "Paul et Virginie",
            "author": "Jacques-Henri Bernardin de Saint-Pierre",
            "lang": "French",
            "relyear": 1788,
            "copies": 25,
            "genre": "Novel",
            "pagecount": 348,
            "source": ""
        },
        {
            "title": "Lust for Life",
            "author": "Irving Stone",
            "lang": "English",
            "relyear": 1934,
            "copies": 25,
            "genre": "Biography",
            "pagecount": 512,
            "source": ""
        },
        {
            "title": "The Wind in the Willows",
            "author": "Kenneth Grahame",
            "lang": "English",
            "relyear": 1908,
            "copies": 25,
            "genre": "Children's",
            "pagecount": 272,
            "source": ""
        },
        {
            "title": "The 7 Habits of Highly Effective People",
            "author": "Stephen R. Covey",
            "lang": "English",
            "relyear": 1989,
            "copies": 25,
            "genre": "Self-Help",
            "pagecount": 381,
            "source": ""
        },
        {
            "title": "Virgin Soil Upturned (Поднятая целина)",
            "author": "Mikhail Sholokhov",
            "lang": "Russian",
            "relyear": 1935,
            "copies": 24,
            "genre": "Novel",
            "pagecount": 807,
            "source": ""
        },
        {
            "title": "The Celestine Prophecy",
            "author": "James Redfield",
            "lang": "English",
            "relyear": 1993,
            "copies": 23,
            "genre": "Spiritual",
            "pagecount": 288,
            "source": ""
        },
        {
            "title": "The Fault in Our Stars",
            "author": "John Green",
            "lang": "English",
            "relyear": 2012,
            "copies": 23,
            "genre": "Romance",
            "pagecount": 313,
            "source": ""
        },
        {
            "title": "The Girl on the Train",
            "author": "Paula Hawkins",
            "lang": "English",
            "relyear": 2015,
            "copies": 23,
            "genre": "Thriller",
            "pagecount": 395,
            "source": ""
        },
        {
            "title": "The Shack",
            "author": "William P. Young",
            "lang": "English",
            "relyear": 2007,
            "copies": 22.5,
            "genre": "Novel",
            "pagecount": 256,
            "source": ""
        },
        {
            "title": "Uncle Styopa (Дядя Стёпа)",
            "author": "Sergey Mikhalkov",
            "lang": "Russian",
            "relyear": 1936,
            "copies": 21,
            "genre": "Children's",
            "pagecount": 64,
            "source": ""
        },
        {
            "title": "The Godfather",
            "author": "Mario Puzo",
            "lang": "English",
            "relyear": 1969,
            "copies": 21,
            "genre": "Crime",
            "pagecount": 448,
            "source": ""
        },
        {
            "title": "Love Story",
            "author": "Erich Segal",
            "lang": "English",
            "relyear": 1970,
            "copies": 21,
            "genre": "Romance",
            "pagecount": 160,
            "source": ""
        },
        {
            "title": "Catching Fire",
            "author": "Suzanne Collins",
            "lang": "English",
            "relyear": 2009,
            "copies": 21,
            "genre": "YA",
            "pagecount": 391,
            "source": ""
        },
        {
            "title": "Mockingjay",
            "author": "Suzanne Collins",
            "lang": "English",
            "relyear": 2010,
            "copies": 20,
            "genre": "YA",
            "pagecount": 390,
            "source": ""
        },
        {
            "title": "Kitchen (キッチン)",
            "author": "Banana Yoshimoto",
            "lang": "Japanese",
            "relyear": 1988,
            "copies": 20,
            "genre": "Novel",
            "pagecount": 197,
            "source": ""
        },
        {
            "title": "Andromeda Nebula (Туманность Андромеды)",
            "author": "Ivan Yefremov",
            "lang": "Russian",
            "relyear": 1957,
            "copies": 20,
            "genre": "Science Fiction",
            "pagecount": 397,
            "source": ""
        },
        {
            "title": "Autobiography of a Yogi (योगी कथामृत)",
            "author": "Paramahansa Yogananda",
            "lang": "Hindi",
            "relyear": 1946,
            "copies": 20,
            "genre": "Biography",
            "pagecount": 566,
            "source": ""
        },
        {
            "title": "Gone Girl",
            "author": "Gillian Flynn",
            "lang": "English",
            "relyear": 2012,
            "copies": 20,
            "genre": "Crime",
            "pagecount": 422,
            "source": ""
        },
        {
            "title": "All Quiet on the Western Front (Im Westen nichts Neues)",
            "author": "Erich Maria Remarque",
            "lang": "German",
            "relyear": 1929,
            "copies": 20,
            "genre": "War",
            "pagecount": 227,
            "source": ""
        },
        {
            "title": "The Bermuda Triangle",
            "author": "Charles Berlitz",
            "lang": "English",
            "relyear": 1974,
            "copies": 20,
            "genre": "Mystery",
            "pagecount": 203,
            "source": ""
        },
        {
            "title": "Things Fall Apart",
            "author": "Chinua Achebe",
            "lang": "English",
            "relyear": 1958,
            "copies": 20,
            "genre": "Novel",
            "pagecount": 209,
            "source": ""
        },
        {
            "title": "Animal Farm",
            "author": "George Orwell",
            "lang": "English",
            "relyear": 1945,
            "copies": 20,
            "genre": "Dystopian",
            "pagecount": 114,
            "source": ""
        },
        {
            "title": "Wolf Totem (狼图腾)",
            "author": "Jiang Rong",
            "lang": "Chinese",
            "relyear": 2004,
            "copies": 20,
            "genre": "Semi-autobiographical novel",
            "pagecount": 544,
            "source": ""
        },
        {
            "title": "The Happy Hooker: My Own Story",
            "author": "Xaviera Hollander",
            "lang": "English",
            "relyear": 1971,
            "copies": 20,
            "genre": "Memoir",
            "pagecount": 304,
            "source": ""
        },
        {
            "title": "Jaws",
            "author": "Peter Benchley",
            "lang": "English",
            "relyear": 1974,
            "copies": 20,
            "genre": "Thriller",
            "pagecount": 352,
            "source": ""
        },
        {
            "title": "Love You Forever",
            "author": "Robert Munsch",
            "lang": "English",
            "relyear": 1986,
            "copies": 20,
            "genre": "Children's",
            "pagecount": 32,
            "source": ""
        },
        {
            "title": "The Women's Room",
            "author": "Marilyn French",
            "lang": "English",
            "relyear": 1977,
            "copies": 20,
            "genre": "Feminist novel",
            "pagecount": 496,
            "source": ""
        },
        {
            "title": "What to Expect When You're Expecting",
            "author": "Arlene Eisenberg and Heidi Murkoff",
            "lang": "English",
            "relyear": 1984,
            "copies": 20,
            "genre": "Pregnancy guide",
            "pagecount": 351,
            "source": ""
        },
        {
            "title": "Adventures of Huckleberry Finn",
            "author": "Mark Twain",
            "lang": "English",
            "relyear": 1885,
            "copies": 20,
            "genre": "Satire",
            "pagecount": 362,
            "source": ""
        },
        {
            "title": "The Secret Diary of Adrian Mole, Aged 13¾",
            "author": "Sue Townsend",
            "lang": "English",
            "relyear": 1982,
            "copies": 20,
            "genre": "YA",
            "pagecount": 293,
            "source": ""
        },
        {
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "lang": "English",
            "relyear": 1813,
            "copies": 20,
            "genre": "Romance",
            "pagecount": 496,
            "source": ""
        },
        {
            "title": "Kon-Tiki: Across the Pacific in a Raft (Kon-Tiki ekspedisjonen)",
            "author": "Thor Heyerdahl",
            "lang": "Norwegian",
            "relyear": 1950,
            "copies": 20,
            "genre": "Travel literature",
            "pagecount": 256,
            "source": ""
        },
        {
            "title": "The Good Soldier Švejk (Osudy dobrého vojáka Švejka za světové války)",
            "author": "Jaroslav Hašek",
            "lang": "Czech",
            "relyear": 1923,
            "copies": 20,
            "genre": "Satire",
            "pagecount": 228,
            "source": ""
        },
        {
            "title": "Where the Wild Things Are",
            "author": "Maurice Sendak",
            "lang": "English",
            "relyear": 1963,
            "copies": 20,
            "genre": "Children's",
            "pagecount": 48,
            "source": ""
        },
        {
            "title": "The Power of Positive Thinking",
            "author": "Norman Vincent Peale",
            "lang": "English",
            "relyear": 1952,
            "copies": 20,
            "genre": "Self-help",
            "pagecount": 328,
            "source": ""
        },
        {
            "title": "The Secret",
            "author": "Rhonda Byrne",
            "lang": "English",
            "relyear": 2006,
            "copies": 20,
            "genre": "Self-help",
            "pagecount": 198,
            "source": ""
        },
        {
            "title": "Fear of Flying",
            "author": "Erica Jong",
            "lang": "English",
            "relyear": 1973,
            "copies": 20,
            "genre": "Romance",
            "pagecount": 340,
            "source": ""
        },
        {
            "title": "Dune",
            "author": "Frank Herbert",
            "lang": "English",
            "relyear": 1965,
            "copies": 20,
            "genre": "Science Fiction",
            "pagecount": 896,
            "source": ""
        },
        {
            "title": "Charlie and the Chocolate Factory",
            "author": "Roald Dahl",
            "lang": "English",
            "relyear": 1964,
            "copies": 20,
            "genre": "Children's",
            "pagecount": 192,
            "source": ""
        },
        {
            "title": "The Naked Ape",
            "author": "Desmond Morris",
            "lang": "English",
            "relyear": 1968,
            "copies": 20,
            "genre": "Science",
            "pagecount": 255,
            "source": ""
        },
        {
            "title": "Where the Crawdads Sing",
            "author": "Delia Owens",
            "lang": "English",
            "relyear": 2018,
            "copies": 18,
            "genre": "Coming of Age",
            "pagecount": 255,
            "source": ""
        },
        {
            "title": "Totto-chan, the Little Girl at the Window (窓ぎわのトットちゃん)",
            "author": "Tetsuko Kuroyanagi",
            "lang": "Japanese",
            "relyear": 1981,
            "copies": 18,
            "genre": "Biography",
            "pagecount": 232,
            "source": ""
        },
        {
            "title": "Matilda",
            "author": "Roald Dahl",
            "lang": "English",
            "relyear": 1988,
            "copies": 17,
            "genre": "Children's",
            "pagecount": 256,
            "source": ""
        },
        {
            "title": "The Book Thief",
            "author": "Markus Zusak",
            "lang": "English",
            "relyear": 2005,
            "copies": 16,
            "genre": "YA",
            "pagecount": 592,
            "source": ""
        },
        {
            "title": "The Horse Whisperer",
            "author": "Nicholas Evans",
            "lang": "English",
            "relyear": 1995,
            "copies": 16,
            "genre": "Novel",
            "pagecount": 678,
            "source": ""
        },
        {
            "title": "Goodnight Moon",
            "author": "Margaret Wise Brown",
            "lang": "English",
            "relyear": 1947,
            "copies": 16,
            "genre": "Children's",
            "pagecount": 32,
            "source": ""
        },
        {
            "title": "The Neverending Story (Die unendliche Geschichte)",
            "author": "Michael Ende",
            "lang": "German",
            "relyear": 1979,
            "copies": 16,
            "genre": "Children's",
            "pagecount": 448,
            "source": ""
        },
        {
            "title": "All the Light We Cannot See",
            "author": "Anthony Doerr",
            "lang": "English",
            "relyear": 2014,
            "copies": 15.3,
            "genre": "War",
            "pagecount": 530,
            "source": ""
        },
        {
            "title": "Fifty Shades of Grey",
            "author": "E. L. James",
            "lang": "English",
            "relyear": 2011,
            "copies": 15.2,
            "genre": "Erotica",
            "pagecount": 514,
            "source": ""
        },
        {
            "title": "The Outsiders",
            "author": "S. E. Hinton",
            "lang": "English",
            "relyear": 1967,
            "copies": 15,
            "genre": "Historical Fiction",
            "pagecount": 192,
            "source": ""
        },
        {
            "title": "Guess How Much I Love You",
            "author": "Sam McBratney",
            "lang": "English",
            "relyear": 1994,
            "copies": 15,
            "genre": "Children's",
            "pagecount": 40,
            "source": ""
        },
        {
            "title": "Shōgun",
            "author": "James Clavell",
            "lang": "English",
            "relyear": 1975,
            "copies": 15,
            "genre": "Historical Fiction",
            "pagecount": 1152,
            "source": "https://en.wikipedia.org/wiki/Sh%C5%8Dgun_(novel)"
        },
        {
            "title": "The Poky Little Puppy",
            "author": "Janette Sebring Lowrey",
            "lang": "English",
            "relyear": 1942,
            "copies": 15,
            "genre": "Children's",
            "pagecount": 24,
            "source": ""
        },
        {
            "title": "The Pillars of the Earth",
            "author": "Ken Follett",
            "lang": "English",
            "relyear": 1989,
            "copies": 15,
            "genre": "Historical Fiction",
            "pagecount": 1104,
            "source": ""
        },
        {
            "title": "Perfume (Das Parfum)",
            "author": "Patrick Süskind",
            "lang": "German",
            "relyear": 1985,
            "copies": 15,
            "genre": "Fantasy",
            "pagecount": 263,
            "source": "https://en.wikipedia.org/wiki/Perfume_(novel)"
        },
        {
            "title": "The Grapes of Wrath",
            "author": "John Steinbeck",
            "lang": "English",
            "relyear": 1939,
            "copies": 15,
            "genre": "Fiction",
            "pagecount": 464,
            "source": "https://en.wikipedia.org/wiki/The_Grapes_of_Wrath"
        },
        {
            "title": "The Shadow of the Wind (La sombra del viento)",
            "author": "Carlos Ruiz Zafón",
            "lang": "Spanish",
            "relyear": 2001,
            "copies": 15,
            "genre": "Historical Fiction",
            "pagecount": 569,
            "source": "https://www.amazon.com/-/es/Carlos-Ruiz-Zaf%C3%B3n/dp/0307472590"
        },
        {
            "title": "Interpreter of Maladies",
            "author": "Jhumpa Lahiri",
            "lang": "English",
            "relyear": 2000,
            "copies": 15,
            "genre": "Short Stories",
            "pagecount": 198,
            "source": "https://en.wikipedia.org/wiki/Interpreter_of_Maladies"
        },
        {
            "title": "Becoming",
            "author": "Michelle Obama",
            "lang": "English",
            "relyear": 2018,
            "copies": 14,
            "genre": "Memoir",
            "pagecount": 448,
            "source": "https://www.amazon.com/Becoming-Michelle-Obama/dp/1524763136"
        },
        {
            "title": "The Hitchhiker's Guide to the Galaxy",
            "author": "Douglas Adams",
            "lang": "English",
            "relyear": 1979,
            "copies": 14,
            "genre": "Science fiction",
            "pagecount": 224,
            "source": ""
        },
        {
            "title": "Tuesdays with Morrie",
            "author": "Mitch Albom",
            "lang": "English",
            "relyear": 1997,
            "copies": 14,
            "genre": "Memoir",
            "pagecount": 192,
            "source": "https://www.amazon.com/Tuesdays-Morrie-Greatest-Lesson-Anniversary/dp/076790592X"
        },
        {
            "title": "God's Little Acre",
            "author": "Erskine Caldwell",
            "lang": "English",
            "relyear": 1933,
            "copies": 14,
            "genre": "Novel",
            "pagecount": 224,
            "source": "https://en.wikipedia.org/wiki/God%27s_Little_Acre"
        },
        {
            "title": "Follow Your Heart (Va' dove ti porta il cuore)",
            "author": "Susanna Tamaro",
            "lang": "Italian",
            "relyear": 1994,
            "copies": 14,
            "genre": "Novel",
            "pagecount": 93,
            "source": ""
        },
        {
            "title": "A Wrinkle in Time",
            "author": "Madeleine L'Engle",
            "lang": "English",
            "relyear": 1962,
            "copies": 14,
            "genre": "Science Fiction",
            "pagecount": 256,
            "source": "https://en.wikipedia.org/wiki/A_Wrinkle_in_Time"
        },
        {
            "title": "Long Walk to Freedom",
            "author": "Nelson Mandela",
            "lang": "English",
            "relyear": 1994,
            "copies": 14,
            "genre": "Biography",
            "pagecount": 656,
            "source": "https://www.amazon.com/Long-Walk-Freedom-Autobiography-Mandela/dp/0316548189"
        },
        {
            "title": "The Old Man and the Sea",
            "author": "Ernest Hemingway",
            "lang": "English",
            "relyear": 1952,
            "copies": 13,
            "genre": "Fiction",
            "pagecount": 128,
            "source": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea"
        },
        {
            "title": "Life After Life",
            "author": "Raymond Moody",
            "lang": "English",
            "relyear": 1975,
            "copies": 13,
            "genre": "Science",
            "pagecount": 208,
            "source": "https://www.amazon.com/Life-After-Bestselling-Investigation-Experiences/dp/006242890X"
        },
        {
            "title": "Momo",
            "author": "Michael Ende",
            "lang": "German",
            "relyear": 1973,
            "copies": 13,
            "genre": "Children's",
            "pagecount": 304,
            "source": ""
        },
        {
            "title": "Peyton Place",
            "author": "Grace Metalious",
            "lang": "English",
            "relyear": 1956,
            "copies": 12.1,
            "genre": "Fiction",
            "pagecount": 372,
            "source": "https://en.wikipedia.org/wiki/Peyton_Place_(novel)"
        },
        {
            "title": "The Giver",
            "author": "Lois Lowry",
            "lang": "English",
            "relyear": 1993,
            "copies": 12,
            "genre": "Dsytopia",
            "pagecount": 208,
            "source": ""
        },
        {
            "title": "Me Before You",
            "author": "Jojo Moyes",
            "lang": "English",
            "relyear": 2012,
            "copies": 20,
            "genre": "Romance",
            "pagecount": 369,
            "source": "https://www.goodreads.com/book/show/17347634-me-before-you"
        },
        {
            "title": "Norwegian Wood (ノルウェイの森)",
            "author": "Haruki Murakami",
            "lang": "Japanese",
            "relyear": 1987,
            "copies": 12,
            "genre": "Tragedy",
            "pagecount": 296,
            "source": "https://en.wikipedia.org/wiki/Norwegian_Wood_(novel)"
        },
        {
            "title": "The Plague (La Peste)",
            "author": "Albert Camus",
            "lang": "French",
            "relyear": 1947,
            "copies": 12,
            "genre": "Tragedy",
            "pagecount": 308,
            "source": "https://en.wikipedia.org/wiki/The_Plague_(novel)"
        },
        {
            "title": "No Longer Human (人間失格)",
            "author": "Osamu Dazai",
            "lang": "Japanese",
            "relyear": 1948,
            "copies": 12,
            "genre": "Novel",
            "pagecount": 177,
            "source": "https://www.amazon.com/No-Longer-Human-Osamu-Dazai/dp/0811204812"
        },
        {
            "title": "Man's Search for Meaning (Ein Psychologe erlebt das Konzentrationslager)",
            "author": "Viktor Frankl",
            "lang": "German",
            "relyear": 1946,
            "copies": 12,
            "genre": "Science",
            "pagecount": 184,
            "source": "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X"
        },
        {
            "title": "The Prophet",
            "author": "Kahlil Gibran",
            "lang": "English",
            "relyear": 1923,
            "copies": 11,
            "genre": "Poem",
            "pagecount": 107,
            "source": "https://en.wikipedia.org/wiki/The_Prophet_(book)"
        },
        {
            "title": "The Boy in the Striped Pyjamas",
            "author": "John Boyne",
            "lang": "English",
            "relyear": 2006,
            "copies": 11,
            "genre": "Tragedy",
            "pagecount": 224,
            "source": "https://www.amazon.com/Boy-Striped-Pajamas-John-Boyne/dp/0385751060"
        },
        {
            "title": "The Exorcist",
            "author": "William Peter Blatty",
            "lang": "English",
            "relyear": 1971,
            "copies": 11,
            "genre": "Horror",
            "pagecount": 385,
            "source": ""
        },
        {
            "title": "The Gruffalo",
            "author": "Julia Donaldson",
            "lang": "English",
            "relyear": 1999,
            "copies": 10.5,
            "genre": "Children's",
            "pagecount": 32,
            "source": "https://en.wikipedia.org/wiki/The_Gruffalo"
        },
        {
            "title": "Fifty Shades Darker",
            "author": "E. L. James",
            "lang": "English",
            "relyear": 2012,
            "copies": 10.4,
            "genre": "Erotica",
            "pagecount": 576,
            "source": ""
        },
        {
            "title": "Tobacco Road",
            "author": "Erskine Caldwell",
            "lang": "English",
            "relyear": 1932,
            "copies": 10,
            "genre": "Realism",
            "pagecount": 145,
            "source": "https://en.wikipedia.org/wiki/Tobacco_Road_(novel)"
        },
        {
            "title": "Ronia, the Robber's Daughter",
            "author": "Astrid Lindgren",
            "lang": "Swedish",
            "relyear": 1981,
            "copies": 10,
            "genre": "Fantasy",
            "pagecount": 235,
            "source": "https://en.wikipedia.org/wiki/Ronia,_the_Robber%27s_Daughter"
        },
        {
            "title": "The Cat in the Hat",
            "author": "Dr. Seuss",
            "lang": "English",
            "relyear": 1957,
            "copies": 10.5,
            "genre": "Children's",
            "pagecount": 61,
            "source": "https://www.amazon.com/Cat-Hat-Dr-Seuss/dp/039480001X"
        },
        {
            "title": "Diana: Her True Story",
            "author": "Andrew Morton",
            "lang": "English",
            "relyear": 1992,
            "copies": 10,
            "genre": "Biography",
            "pagecount": 448,
            "source": "https://www.amazon.com/Diana-Her-True-Story-Words/dp/1501169734"
        },
        {
            "title": "The Help",
            "author": "Kathryn Stockett",
            "lang": "English",
            "relyear": 2009,
            "copies": 10,
            "genre": "Historical Fiction",
            "pagecount": 524,
            "source": "https://en.wikipedia.org/wiki/The_Help"
        },
        {
            "title": "Catch-22",
            "author": "Joseph Heller",
            "lang": "English",
            "relyear": 1961,
            "copies": 10,
            "genre": "War",
            "pagecount": 453,
            "source": "https://en.wikipedia.org/wiki/Catch-22"
        },
        {
            "title": "The Stranger (L'Étranger)",
            "author": "Albert Camus",
            "lang": "French",
            "relyear": 1942,
            "copies": 10,
            "genre": "Novella",
            "pagecount": 159,
            "source": "https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)"
        },
        {
            "title": "Eye of the Needle",
            "author": "Ken Follett",
            "lang": "English",
            "relyear": 1978,
            "copies": 10,
            "genre": "Espionage",
            "pagecount": 416,
            "source": "https://www.amazon.com/Eye-Needle-Novel-Ken-Follett/dp/0451476808"
        },
        {
            "title": "The Lovely Bones",
            "author": "Alice Sebold",
            "lang": "English",
            "relyear": 2002,
            "copies": 10,
            "genre": "Novel",
            "pagecount": 328,
            "source": "https://en.wikipedia.org/wiki/The_Lovely_Bones"
        },
        {
            "title": "Wild Swans",
            "author": "Jung Chang",
            "lang": "English",
            "relyear": 1992,
            "copies": 10,
            "genre": "Memoir",
            "pagecount": 538,
            "source": "https://www.amazon.com/Wild-Swans-Three-Daughters-China/dp/0743246985"
        },
        {
            "title": "Santa Evita",
            "author": "Tomás Eloy Martínez",
            "lang": "Spanish",
            "relyear": 1995,
            "copies": 10,
            "genre": "Comedy",
            "pagecount": 384,
            "source": "https://www.amazon.com/Santa-Evita-Tomas-Eloy-Martinez/dp/0679768149"
        },
        {
            "title": "Night (Un di Velt Hot Geshvign)",
            "author": "Elie Wiesel",
            "lang": "Yiddish",
            "relyear": 1958,
            "copies": 10,
            "genre": "Memoir",
            "pagecount": 245,
            "source": "https://en.wikipedia.org/wiki/Night_(memoir)"
        },
        {
            "title": "Confucius from the Heart (于丹《论语》心得)",
            "author": "Yu Dan",
            "lang": "Chinese",
            "relyear": 2006,
            "copies": 10,
            "genre": "Philosophy",
            "pagecount": 192,
            "source": "https://www.amazon.com/Confucius-Heart-Ancient-Wisdom-Todays/dp/1416596577"
        },
        {
            "title": "The Total Woman",
            "author": "Marabel Morgan",
            "lang": "English",
            "relyear": 1974,
            "copies": 10,
            "genre": "Self-help",
            "pagecount": 260,
            "source": "https://www.amazon.com/Total-Woman-Marabel-Morgan/dp/0671732110"
        },
        {
            "title": "Knowledge-value Revolution (知価革命)",
            "author": "Taichi Sakaiya",
            "lang": "Japanese",
            "relyear": 1985,
            "copies": 10,
            "genre": "Politics",
            "pagecount": 379,
            "source": "https://www.amazon.com/Knowledge-Value-Revolution-History-Future/dp/0870119427"
        },
        {
            "title": "Problems in China's Socialist Economy (中国社会主义经济问题研究)",
            "author": "Xue Muqiao",
            "lang": "Chinese",
            "relyear": 1979,
            "copies": 10,
            "genre": "Politics",
            "pagecount": 316,
            "source": "https://www.amazon.com/Chinas-socialist-economy-China-knowledge/dp/B0007CAZLK"
        },
        {
            "title": "What Color Is Your Parachute?",
            "author": "Richard Nelson Bolles",
            "lang": "English",
            "relyear": 1970,
            "copies": 10,
            "genre": "Business",
            "pagecount": 352,
            "source": "https://www.amazon.com/What-Color-Your-Parachute-Meaningful/dp/1984861204"
        },
        {
            "title": "The Dukan Diet",
            "author": "Pierre Dukan",
            "lang": "French",
            "relyear": 2000,
            "copies": 10,
            "genre": "Recipes",
            "pagecount": 368,
            "source": "https://www.amazon.com/Dukan-Diet-Cookbook-Essential-Companion/dp/030798673X"
        },
        {
            "title": "The Joy of Sex",
            "author": "Alex Comfort",
            "lang": "English",
            "relyear": 1972,
            "copies": 10,
            "genre": "Self-Help",
            "pagecount": 288,
            "source": "https://www.amazon.com/Joy-Sex-Ultimate-Revised/dp/0307587789"
        },
        {
            "title": "The Gospel According to Peanuts",
            "author": "Robert L. Short",
            "lang": "English",
            "relyear": 1965,
            "copies": 10,
            "genre": "Christian literature",
            "pagecount": 130,
            "source": "https://www.amazon.com/Gospel-According-Peanuts-Robert-Short/dp/0664222226"
        },
        {
            "title": "The Subtle Art of Not Giving a Fuck",
            "author": "Mark Manson",
            "lang": "English",
            "relyear": 2016,
            "copies": 10,
            "genre": "Self-help",
            "pagecount": 224,
            "source": "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713"
        },
        {
            "title": "Life of Pi",
            "author": "Yann Martel",
            "lang": "English",
            "relyear": 2001,
            "copies": 10,
            "genre": "Philosophy",
            "pagecount": 352,
            "source": "https://en.wikipedia.org/wiki/Life_of_Pi"
        },
        {
            "title": "The Front Runner",
            "author": "Patricia Nell Warren",
            "lang": "English",
            "relyear": 1974,
            "copies": 10,
            "genre": "Romance",
            "pagecount": 346,
            "source": "https://en.wikipedia.org/wiki/The_Front_Runner_(novel)"
        },
        {
            "title": "The Goal",
            "author": "Eliyahu M. Goldratt",
            "lang": "English",
            "relyear": 1984,
            "copies": 10,
            "genre": "Business",
            "pagecount": 362,
            "source": "https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951"
        },
        {
            "title": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "lang": "English",
            "relyear": 1953,
            "copies": 10,
            "genre": "Dystopian",
            "pagecount": 272,
            "source": ""
        },
        {
            "title": "Angela's Ashes",
            "author": "Frank McCourt",
            "lang": "English",
            "relyear": 1996,
            "copies": 10,
            "genre": "Memoir",
            "pagecount": 368,
            "source": "https://www.amazon.com/Angelas-Ashes-Memoir-Frank-McCourt/dp/068484267X"
        },
        {
            "title": "The Story of My Experiments with Truth (સત્યના પ્રયોગો અથવા આત્મકથા)",
            "author": "Mohandas Karamchand Gandhi",
            "lang": "Gujarati",
            "relyear": 1929,
            "copies": 10,
            "genre": "Biography",
            "pagecount": 494,
            "source": "https://www.amazon.com/Mohandas-K-Gandhi-Autobiography-Experiments/dp/0486245934"
        },
        {
            "title": "Bridget Jones's Diary",
            "author": "Helen Fielding",
            "lang": "English",
            "relyear": 1996,
            "copies": 10,
            "genre": "Fiction",
            "pagecount": 288,
            "source": "https://www.amazon.com/Bridget-Joness-Diary-Helen-Fielding/dp/014028009X"
        }
    ];

    class ReactDataTable extends React.Component {
        constructor(props) //Calls the constructor for this class
        {
            super(props); //Calls the parent constructor

            this.originalData = props.originalData;

            this.state = {
                lang: '',
                minRelYear: null,
                maxRelYear: null,
                minCopies: null,
                maxCopies: null,
                genre: '',
                minPageCount: null,
                maxPageCount: null,
            };

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }

        //class needs to be renamed to className
        render() {

            let filteredData = this.originalData;

            if (this.state.genre !== '') {
                filteredData = filteredData.filter((row) => row.genre === this.state.genre
                );
            }
            if (this.state.lang !== '') {
                filteredData = filteredData.filter((row) => row.lang === this.state.lang
                );
            }
            if (this.state.minRelYear !== null) {
                filteredData = filteredData.filter((row) => row.relyear >= this.state.minRelYear
                );
            }
            if (this.state.maxRelYear !== null) {
                filteredData = filteredData.filter((row) => row.relyear <= this.state.maxRelYear
                );
            }
            if (this.state.minCopies !== null) {
                filteredData = filteredData.filter((row) => row.copies >= this.state.minCopies
                );
            }
            if (this.state.maxCopies !== null) {
                filteredData = filteredData.filter((row) => row.copies <= this.state.maxCopies
                );
            }
            if (this.state.minPageCount !== null) {
                filteredData = filteredData.filter((row) => row.pagecount >= this.state.minPageCount
                );
            }
            if (this.state.maxPageCount !== null) {
                filteredData = filteredData.filter((row) => row.pagecount <= this.state.maxPageCount
                );
            }


            return (
                <React.Fragment>
                    <Filters
                        lang={this.state.lang}
                        genre={this.state.genre}
                        updateFormState={this.updateFormState}
                    />
                    <br></br>
                    <DataTable dataToDisplay={filteredData} />
                </React.Fragment>
            )
        }
    }
    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={bookData} />);
})();