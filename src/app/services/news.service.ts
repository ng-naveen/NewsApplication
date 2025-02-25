import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getTopNews() {
    let topNews = {
      "status": "ok",
      "totalResults": 35,
      "articles": [
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": null,
          "title": "Horns outlast Aggies, to play UGA for SEC title - ESPN",
          "description": "The Texas Longhorns raced out to a 17-0 lead before holding off the rival Texas A&M Aggies 17-7 on Saturday night in College Station, Texas, securing a berth in the SEC championship game next week in Atlanta, where they will meet the Georgia Bulldogs.",
          "url": "https://www.espn.com/college-football/story/_/id/42708984/texas-longhorns-top-texas-aggies-play-sec-title",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1201%2Fr1421945_1296x729_16%2D9.jpg",
          "publishedAt": "2024-12-01T04:51:00Z",
          "content": "Nov 30, 2024, 11:51 PM ET\r\nCOLLEGE STATION, Texas -- Quintrevion Wisner ran for a career-high 186 yards and Quinn Ewers threw a touchdown pass to lead No. 3 Texas to a 17-7 win over 20th-ranked archr… [+1492 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "Shakiel Mahjouri",
          "title": "2024 WWE Survivor Series: WarGames review, winners, grades: Roman Reigns pins Solo Sikoa in Bloodline Battle - CBS Sports",
          "description": "Reigns and CM Punk overcame a lot of friction to get the big win",
          "url": "https://www.cbssports.com/wwe/news/2024-wwe-survivor-series-wargames-results-live-updates-recap-grades-highlights-matches-card-start-time/live/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/12/01/6bc15827-eb19-4f27-95a7-a6c70898be0e/thumbnail/1200x675/90782e89f035eda6f7dfc72788d120b6/2024-wwe-survivor-series-wargames-roman-reigns-jey-uso-jimmy-uso-sami-zayn-cm-punk-paul-heyman-pro-wrestling-news-today-nov-30-2024.jpg",
          "publishedAt": "2024-12-01T04:47:27Z",
          "content": "Solo Sikoa's hostile takeover of The Bloodline hit a major snag at WWE Survivor Series: WarGames. Roman Reigns, CM Punk and their team overcame Sikoa's roster in a dramatic main event event on Saturd… [+12251 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "247Sports"
          },
          "author": "Brad Crawford",
          "title": "College football bowl projections after Week 14: Playoff changes after Texas wins, Ohio State falters - 247Sports",
          "description": "Major changes in our penultimate bowl projections coming out of rivalry weekend",
          "url": "https://247sports.com/longformarticle/college-football-bowl-projections-after-week-14-playoff-changes-after-texas-wins-ohio-state-falters-240706194/",
          "urlToImage": "https://s3media.247sports.com/Uploads/Assets/745/783/12783745.png?width=1200&height=628&crop=1.91:1&fit=cover",
          "publishedAt": "2024-12-01T04:10:36Z",
          "content": "There are several new College Football Playoff entries following rivalry weekend in our updated bowl projections and top-12 lookahead. Miami's loss to Syracuse opens the door for several teams, inclu… [+943 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MITCH STACY",
          "title": "Michigan, Ohio State players brawl after Wolverines beat No. 2 Buckeyes. Police use pepper spray - The Associated Press",
          "description": "A fight broke out at midfield after Michigan stunned No. 2 Ohio State 13-10 on Saturday when Wolverines players attempted to plant their flag on the OSU logo and were confronted by the Buckeyes. Police used pepper spray to break up the players, who threw punc…",
          "url": "https://apnews.com/article/michigan-ohio-state-fight-flag-30e38adabbe26082c3669bae8c9522db",
          "urlToImage": "https://dims.apnews.com/dims4/default/bc141fd/2147483647/strip/true/crop/4894x2753+0+255/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F92%2Fb0%2Fd673ad02aaa31659b210c27473e8%2F7265c063600c4a71b31940b4df02167c",
          "publishedAt": "2024-12-01T03:59:00Z",
          "content": "COLUMBUS, Ohio (AP) A fight broke out at midfield after Michigan stunned No. 2 Ohio State 13-10 on Saturday when Wolverines players attempted to plant their flag on the OSU logo and were confronted b… [+2287 chars]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": "Ari Hawkins",
          "title": "Trump threatens BRICS nations with 100 percent tariff - POLITICO",
          "description": "Trump also said in his post that the countries \"can go find another 'sucker!' There is no chance that the BRICS will replace the U.S. Dollar in International Trade, and any Country that tries should wave goodbye to America.\"",
          "url": "https://www.politico.com/news/2024/11/30/trump-brics-tariff-trade-00192042",
          "urlToImage": "https://static.politico.com/8c/9e/15399f5c491792224bc85fc78804/https-delivery-gettyimages.com/downloads/2186662154",
          "publishedAt": "2024-12-01T02:58:03Z",
          "content": "Officials from the BRICS countries have discussed moving away from the U.S. dollar in recent years. The concept gained steam in 2022 when the U.S. imposed massive economic sanctions on Russia over it… [+1016 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "ERIC TUCKER, ALAN SUDERMAN",
          "title": "Trump taps Kash Patel for FBI director, an ally who would aid in his effort to upend law enforcement - The Associated Press",
          "description": "President-elect Donald Trump says he will nominate Kash Patel to serve as FBI director, turning to a fierce ally to upend America’s premier law enforcement agency and rid the government of perceived “conspirators.” Trump made the announcement on Truth Social …",
          "url": "https://apnews.com/article/trump-fbi-patel-wray-879dc7629905946cc242e90f6ab98739",
          "urlToImage": "https://dims.apnews.com/dims4/default/7e3a26f/2147483647/strip/true/crop/6995x3935+0+364/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F75%2Ff3%2F45eed95d25bb4da1b5956f51e5e6%2F5f9d9c0e8c40499ba4bf75d11bb17a12",
          "publishedAt": "2024-12-01T02:18:00Z",
          "content": "WASHINGTON (AP) President-elect Donald Trump says he will nominate Kash Patel to serve as FBI director, turning to a fierce ally to upend Americas premier law enforcement agency and rid the governmen… [+8792 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Trump picks Jared Kushner's father for ambassador to France - BBC.com",
          "description": "The president-elect had pardoned Charles Kushner of federal charges during his first term.",
          "url": "https://www.bbc.com/news/articles/c0qdq9z7pjzo",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b213/live/a63f62d0-af6e-11ef-8ad7-25baa19b3e3c.jpg",
          "publishedAt": "2024-12-01T01:53:25Z",
          "content": "President-elect Donald Trump announced Saturday that he has selected Charles Kushner as his pick for ambassador to France. \r\nMr Kushner is a real-estate developer and the father of Jared Kushner, hus… [+2119 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Susannah George, Suzan Haidamous, Mustafa Salim",
          "title": "After setbacks, Iran sees Lebanon cease-fire as chance to regroup - The Washington Post",
          "description": "Iran has said that the halt in fighting is a victory for Hezbollah. But behind the scenes, officials worked quietly for a cease-fire to stem the group’s losses.",
          "url": "https://www.washingtonpost.com/world/2024/11/30/iran-lebanon-hezbollah-ceasefire-israel/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WU64TTLK2ADCUCQJ4Z3WXEOWCQ_size-normalized.jpg&w=1440",
          "publishedAt": "2024-12-01T01:33:52Z",
          "content": "DUBAI The cease-fire this week between Israel and Hezbollah in Lebanon has relieved some of the pressure, at least temporarily, that was building on the militant groups key patron, Iran.\r\nIranian off… [+7045 chars]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "ABC News",
          "title": "Trump picks Florida sheriff Chad Chronister for DEA administrator - ABC News",
          "description": null,
          "url": "https://abcnews.go.com/Politics/trump-nominates-hillsborough-county-sheriff-chad-chronister-dea/story?id\\\\u003d116342276",
          "urlToImage": null,
          "publishedAt": "2024-12-01T00:41:46Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Whitehouse.gov"
          },
          "author": "The White House",
          "title": "Statement by NSC Spokesperson Sean Savett on Syria - The White House",
          "description": "We are closely monitoring the situation in Syria and have been in contact over the last 48 hours with regional capitals. The Assad regime’s ongoing",
          "url": "https://www.whitehouse.gov/briefing-room/statements-releases/2024/11/30/statement-by-nsc-spokesperson-sean-savett-on-syria/",
          "urlToImage": "https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png",
          "publishedAt": "2024-12-01T00:18:15Z",
          "content": "We are closely monitoring the situation in Syria and have been in contact over the last 48 hours with regional capitals. The Assad regimes ongoing refusal to engage in the political process outlined … [+756 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PEOPLE"
          },
          "author": "https://www.facebook.com/peoplemag",
          "title": "Gwyneth Paltrow's Daughter Apple Wears Valentino Dress That Took 750 Hours to Make - PEOPLE",
          "description": "Apple Martin, the 20-year-old daughter of Gwyneth Paltrow and Chris Martin, wore a custom Valentino gown to the Le Bal des Débutantes in Paris on Nov. 30. Valentino Creative Director Alessandro Michele’s atelier reportedly spent 750 hours making the dress.",
          "url": "https://people.com/gwyneth-paltrow-chris-martin-daughter-apple-wears-valentino-dress-750-hours-to-maske-le-bal-photos-8753489",
          "urlToImage": "https://people.com/thmb/YpqwzXwn3WSAq2OiPexaUXA_oBo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(699x255:701x257)/Gwyneth-Paltrow-Chris-Martin-Apple-113024-bb8df199179943bfa0e57eae5a14f5b0.jpg",
          "publishedAt": "2024-11-30T23:37:22Z",
          "content": "Apple Martin is entering her debutante era.\r\nThe 20-year-old daughter of Gwyneth Paltrow and Chris Martin attended Le Bal des Débutantes on Saturday, Nov. 30, wearing a custom Valentino gown, which V… [+2691 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "2024-11-30T23:35:46Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "ABC News",
          "title": "Home explosion in Missouri leaves 6 people injured, 3 in critical condition - ABC News",
          "description": null,
          "url": "https://abcnews.go.com/US/home-explosion-missouri-leaves-6-people-injured-3/story?id\\\\u003d116341290",
          "urlToImage": null,
          "publishedAt": "2024-11-30T22:42:21Z",
          "content": null
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Wes Davis",
          "title": "Elon Musk targets OpenAI’s for-profit transition in a new filing - The Verge",
          "description": "Elon Musk’s attorneys asked for a judge to stop OpenAI from becoming a for-profit entity, alleging that OpenAI has committed antitrust violations with Microsoft.",
          "url": "https://www.theverge.com/2024/11/30/24309697/elon-musk-openai-lawsuit-for-profit-transition-preliminary-injunction",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/HqGF1ArOYz6O0wbJa0_NQgCSVKg=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23906797/VRG_Illo_STK022_K_Radtke_Musk_Scales.jpg",
          "publishedAt": "2024-11-30T22:39:44Z",
          "content": "Elon Musk targets OpenAIs for-profit transition in a new filing\r\nElon Musk targets OpenAIs for-profit transition in a new filing\r\n / Musks attorneys say if OpenAI goes for-profit, it could lack suffi… [+1885 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Tom's Guide"
          },
          "author": "Louis Ramirez",
          "title": "I've been covering Cyber Monday deals for 17 years — here's the best sales live now - Tom's Guide",
          "description": "Here's your last chance to shop the lowest prices of the year",
          "url": "https://www.tomsguide.com/live/news/best-cyber-monday-deals-id-buy-2024",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/QJmeBQxW8sGqyCQ45vjRs5-1200-80.jpg",
          "publishedAt": "2024-11-30T22:36:45Z",
          "content": "2024-11-30T22:36:45.569ZThe best smart glasses for less \r\n(Image credit: Future)\r\nNever miss a beat —theRay-Ban Meta smart glassesare designed for everything from listening to music and taking calls … [+6176 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Formula 1"
          },
          "author": "F1",
          "title": "Verstappen demoted for Russell incident in Qatar qualifying - formula1.com",
          "description": "Max Verstappen narrowly claimed pole position for the Qatar Grand Prix, but has now been handed a one-place grid penalty by the stewards for impeding second-placed George Russell during the final part of qualifying.",
          "url": "https://www.formula1.com/en/latest/article/breaking-verstappen-hit-with-one-place-grid-penalty-for-russell-incident.udi2rmsZdfGoAqxiluF2b",
          "urlToImage": "https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1732996029/trackside-images/2024/F1_Grand_Prix_of_Qatar___Sprint__Qualifying/2187607202.jpg",
          "publishedAt": "2024-11-30T22:29:04Z",
          "content": "In a document published by the FIA, the stewards explained that they heard from both drivers and their team representatives, combining this testimony with a review of a range of data including teleme… [+979 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Kaanita Iyer",
          "title": "New York Times: Pete Hegseth’s mother wrote him an email in 2018 accusing him of mistreating women - CNN",
          "description": "The mother of Pete Hegseth, President-elect Donald Trump’s pick to lead the Department of Defense, sent an email to her son in 2018 that sharply criticized his treatment of women, The New York Times reported Friday.",
          "url": "https://www.cnn.com/2024/11/30/politics/pete-hegseth-mother-email-new-york-times/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2185953830-copy.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-11-30T22:21:00Z",
          "content": "The mother of Pete Hegseth, President-elect Donald Trumps pick to lead the Department of Defense, sent an email to her son in 2018 that sharply criticized his treatment of women, The New York Times r… [+3929 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Felix Light",
          "title": "Many thousands rally to oppose Georgian government after break with EU - Reuters",
          "description": "The country was thrown into crisis when Prime Minister Irakli Kobakhidze's Georgian Dream party said it was halting EU accession talks.",
          "url": "https://www.reuters.com/world/europe/georgia-detains-more-than-100-during-anti-government-protest-2024-11-30/",
          "urlToImage": "https://www.reuters.com/resizer/v2/MIDNWDLWMZKDBGF4ESNAKGOMNU.jpg?auth=bbfeccbf1f86343b093b7b35b2724e247dee6d1bc89e2b768c64980374a3477f&height=1005&width=1920&quality=80&smart=true",
          "publishedAt": "2024-11-30T22:14:57Z",
          "content": null
        },
        {
          "source": {
            "id": "ign",
            "name": "IGN"
          },
          "author": "Katie Reul",
          "title": "20 PS5 Games You Can Get for Under $30 This Black Friday, From Elden Ring to The Last of Us Part I - IGN",
          "description": "We've compiled a list of the 10 best deals on PS5 games under $30 and another 10 options of PS5 games under $20.",
          "url": "https://www.ign.com/articles/least-expensive-ps5-games-black-friday-2024",
          "urlToImage": "https://assets-prd.ignimgs.com/2024/11/30/blackfriday2024-ps5gamesunder30-1732999672363.jpg?width=1280",
          "publishedAt": "2024-11-30T22:00:31Z",
          "content": "As Black Friday deals rage on, incredible discounts on PlayStation 5 games continue to emerge at retailers like Best Buy, GameStop, Target, and Walmart. It's the best time of year to find some top-se… [+3855 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Daily Galaxy --Great Discoveries Channel"
          },
          "author": null,
          "title": "Uranus and Neptune May Have Oceans Beneath Their Clouds, Revealing New Mysteries of the Ice Giants - The Daily Galaxy --Great Discoveries Channel",
          "description": "New findings from scientists at UC Berkeley reveal that the ice giants Uranus and Neptune may harbor deep oceans beneath their thick atmospheres. The discovery could explain the bizarre, disordered magnetic fields that have long puzzled astronomers. Unlike Ea…",
          "url": "https://dailygalaxy.com/2024/11/uranus-neptune-oceans-beneath-their-clouds/",
          "urlToImage": "https://bunny-wp-pullzone-eduayjtzy5.b-cdn.net/wp-content/uploads/2024/11/Uranus-and-Neptune-May-Have-Oceans-Beneath-Their-Clouds-Revealing-New-Mysteries-of-the-Ice-Giants.jpg",
          "publishedAt": "2024-11-30T21:32:58Z",
          "content": "Uranus and Neptune have long been a source of fascination and mystery for scientists, especially when it comes to their magnetic fields. While Earth and Jupiter boast well-defined magnetic dipoles, t… [+4101 chars]"
        }
      ]
    };
    return topNews;
  }

}
