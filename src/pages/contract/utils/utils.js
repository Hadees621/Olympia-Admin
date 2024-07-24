
export const authorInfo = [
  { label: "Author Name:", value: "Miss. Yajna Yugtha Jungbadoor" },
  { label: "Pen Name:", value: "Yugtha YJ" },
  { label: "Date of Birth:", value: "NA" },
];

export const contractInfoLeft = [
  { label: "Book Title:", value: "Aine", type: "text", name: "bookTitle" },
  { label: "ISBN:", value: "978-1-78830-014-8", type: "text", name: "isbn" },
  { label: "Imprint:", value: "UnPublished", type: "dropdown", name: "ebook", options: [{ value: "Published", label: "Ebooks" }, { value: "Unpublished", label: "Olympia" }, { value: "bumblebee", label: "Bumblebee" }] },
  { label: "Book No:", value: "1", type: "text", name: "bookNo" },
  { label: "Ebook:", value: "UnPublished", type: "radio", name: "ebook", options: [{ value: "Published", label: "Published" }, { value: "Unpublished", label: "Unpublished" }] },
  { label: "Important Note", value: "loremipsum dolor sit amet, consectetur adipiscing loremipsum amet, consectetur adipiscing", type: "textarea", name: "importantNote" }
];

export const contractInfoRight = [
  { label: "Contract Date:", value: "03-04-2017", type: "date", name: "contractDate" },
  { label: "Publication Date:", value: "22-02-2018", type: "date", name: "publicationDate" },
  { label: "Remainder Date:", value: "18-03-2021", type: "date", name: "remainderDate" },
  { label: "Fast Track:", value: "No", type: "radio", name: "fastTrack", options: [{ value: "Published", label: "Yes" }, { value: "Unpublished", label: "No" }] },
  {
    label: "Situation:", value: "Remaindered", type: "radio", name: "situation", options: [
      { value: "Under Production", label: "Under Production" }, { value: "Released", label: "Released" },
      { value: "Marketing", label: "Marketing" }, { value: "Remaindered", label: "Remaindered" },
      { value: "OnHold", label: "On Hold" }
    ]
  }
];
