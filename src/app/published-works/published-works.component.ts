import { Component, OnInit } from '@angular/core';

interface SampleLink {
  href: string
  text: string
  external: boolean
}

interface PublishedWork {
  title: string
  publisher: string
  publicationYear: string
  publisherLink?: string
  description: string
  sampleLink?: SampleLink
}

const publishedWorks: Array<PublishedWork> = [
  {
    title: "Blackbird Braille",
    publisher: "Let the Weirdness In: A Tribute to Kate Bush, Heads Dance Press",
    publisherLink: "https://headsdance.press/kate-bush-anthology/",
    publicationYear: "2022",
    description: `Gerard was never meant to be a soldier,
                  and the war against the Enemy had drafted him back to
                  the one place he never wanted to be: home. But when he tries
                  to desert, he is warned not to by a man who might never have
                  been there at all, but for his bootprints in the snow.`
  },
  {
    title: "A Life Unled",
    publisher: "Robbed of Sleep, Volume IV",
    publisherLink: "https://www.amazon.com/Robbed-Sleep-Vol-Stories-Anthology/dp/1530257328",
    publicationYear: "2016",
    description: `On a morning thick with fog, ———'s mother disappeared. Many years later, in a similar fog,
                  he sees her on his morning commute.`,
    sampleLink: {
      href: "https://www.amazon.com/Robbed-Sleep-Vol-Stories-Anthology/dp/1530257328",
      external: true,
      text: "Read for free and buy on Amazon"
    }
  },
  {
    title: "For Kathy, Like Everything Else",
    publisher: "The Corner Club Press",
    publisherLink: "http://thecornerclubpress.weebly.com/",
    publicationYear: "2016",
    description: `Gwen is her best friend's maid of honor, and it's time for the bridal shower.
                  The only thing that stands between Gwen and a fabulous party is an un-openable jar
                  of chunky salsa. (And also, steaming jealousy.)`,
    sampleLink: {
      href: 'https://issuu.com/alanalopez/docs/volume5_issue19_winter2016final_57f66744f20a81/22',
      text: "Read online for free",
      external: true,
    }
  },
]

@Component({
  selector: 'app-published-works',
  templateUrl: './published-works.component.html',
  styleUrls: ['./published-works.component.sass']
})
export class PublishedWorksComponent implements OnInit {
  publishedWorks: Array<PublishedWork> = publishedWorks;

  constructor() { }

  ngOnInit(): void {
  }

}
