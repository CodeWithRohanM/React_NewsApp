import { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {



    articles = [
        {
            "source": {
                "id": "lequipe",
                "name": "L'equipe"
            },
            "author": "L'EQUIPE",
            "title": "Le flash sports du 8 novembre",
            "description": "Retrouvez toute l'actualité sportive dans votre flash quotidien.",
            "url": "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-8-novembre/1363697",
            "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/le-flash-sports-l-equipe/1500000001708871/0:0,1997:1331-640-427-75/8a453.jpg",
            "publishedAt": "2022-11-07T23:05:00+00:00",
            "content": "Le Paris-SG hérite du Bayern Munich en 8es de finale de la Ligue des champions. Raphaël Varane est apte pour disputer le Mondial, d'après L'Équipe. Saint-Étienne perd à Metz (2-3) et continue de s'en… [+114 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Jackson Cole",
            "title": "‘Be careful what you wish for’ – Anti-Fenway Sports Group Liverpool fans warned of potential problems chang...",
            "description": "",
            "url": "https://talksport.com/football/1240017/anti-fenway-sports-group-liverpool-fans-warned-potential-problems-jurgen-klopp-club-sale/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2022/11/TC-TALKSPORT-HENRY-FSG.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2022-11-07T22:13:03Z",
            "content": "Some Liverpool fans will rejoice if Fenway Sports Group’s sale of the club happens, but the grass may not be greener on the other side. \r\nIt’s widely reported that Liverpool’s principal owner John W.… [+3958 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "College basketball odds: 2022-23 championship lines, best futures bets",
            "description": "The college basketball odds are out at FOX Bet! Click here to read the title lines and FOX Sports Betting Analyst Jason McIntyre's best futures bets.",
            "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-odds-2022-23-championship-lines-best-futures-bets",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/04/1408/814/04.04.22_NCAA-mens-futures-odds-in-college-basketball_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2022-11-07T20:27:18Z",
            "content": "The 2022-23 men's college basketball season is finally here!\r\nAnd if you are looking to sprinkle a few bucks on some title futures, we got you covered, as it's never too early to consider making a wa… [+3900 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "John Fanta",
            "title": "Duke's new king: Jon Scheyer's journey to one of basketball's biggest jobs",
            "description": "Jon Scheyer is tackling one of the toughest coaching takeovers in sports history — replacing Coach K at Duke. How was he built for this moment?",
            "url": "http://www.foxsports.com/stories/college-basketball/dukes-new-king-jon-scheyers-journey-to-one-of-basketballs-biggest-jobs",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/11/1408/814/11.06.22_Big-feature-on-new-Duke-coach-Jon-Scheyer_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2022-11-07T14:08:43Z",
            "content": "While the majority of students were waking up to head to class on a fall morning in Northbrook, Illinois in 2004, the lights were on at the gym at Glenbrook North High School as the sun rose. Inside … [+20361 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Ed McCambridge",
            "title": "Liverpool put up for sale by Fenway Sports Group",
            "description": "Premier League side Liverpool have been made available to purchase by FSG, the American consortium that owns them",
            "url": "https://www.fourfourtwo.com/news/liverpool-put-up-for-sale-by-fenway-sports-group",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ia6VjaG2i39vyn98jWq4SM-1200-80.jpg",
            "publishedAt": "2022-11-07T13:18:01Z",
            "content": "Liverpool have been put up for sale by Fenway Sports Group (FSG), with a full sales presentation created to entice potential buyers. \r\nAccording to the Athletic, FSG are looking to sell a club which … [+1430 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Sean O'Brien",
            "title": "Liverpool put up for sale: Fenway Sports Group invite offers to buy Premier League giants after 12-year...",
            "description": "",
            "url": "https://talksport.com/football/1239605/liverpool-for-sale-fenway-sports-group-premier-league/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2020/10/GettyImages-1167053123.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2022-11-07T13:00:07Z",
            "content": "Liverpool owners Fenway Sports Group have put the Premier League giants up for sale. \r\nPrincipal owner John W Henry and chairman Tom Werner are inviting offers to buy the Reds after a 12-year tenure.… [+873 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "Melissa Rohlin",
            "title": "How Zion Williamson tuned out the body shamers and came back stronger",
            "description": "Zion Williamson's journey back to being a superstar was circuitous and painful. The Pelicans star details his path to FOX Sports.",
            "url": "http://www.foxsports.com/stories/nba/how-zion-williamson-tuned-out-the-body-shamers-and-came-back-stronger",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/11/1408/814/1106_zion_horiz.jpg?ve=1&tl=1",
            "publishedAt": "2022-11-07T12:56:28Z",
            "content": "Zion Williamson is still bothered by the words he heard about himself.\r\nFat. Lazy. Failure.  \r\nHe went from being the darling of the NBA to its punchline after gaining weight while he was rehabilitat… [+10728 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": " Richard Sherman Interview ",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/276198-the-voncast-with-richard-sherman",
            "urlToImage": null,
            "publishedAt": "2022-11-03T19:37:16.4688503Z",
            "content": null
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": null,
            "title": "☄️️ NEW ANIME JUST DROPPED ☄️",
            "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
            "url": "https://bleacherreport.com/videos/274175-new-anime-just-dropped",
            "urlToImage": null,
            "publishedAt": "2022-11-01T20:37:20.8717451Z",
            "content": "Booker, Luka and Giannis battle for Jokics MVPs. @KOT4Q voices D-Book. Watch Ep. 2 now"
        },
        {
            "source": {
                "id": "the-washington-times",
                "name": "The Washington Times"
            },
            "author": "The Washington Times https://www.washingtontimes.com",
            "title": "Latest Quizzes",
            "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
            "url": "https://www.washingtontimes.com/quiz/",
            "urlToImage": null,
            "publishedAt": "2022-08-30T16:37:43.8583104Z",
            "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }

    render() {

        return <>

            <div className="grid grid-cols-3 gap-5 gap-y-5 container mx-auto">

            {this.state.articles.map((element)=>{
                return <div className="col-span-1" key={element.url}>
                <NewsItem imageUrl = {element.urlToImage} title = {element.title.slice(0,40)} desc = {element.description.slice(0,80)} newsUrl = {element.url}/>
            </div>
            })}
            
            </div>
        </>
    }








}