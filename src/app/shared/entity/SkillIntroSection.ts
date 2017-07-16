export class SkillIntroSection{
    constructor(public sectionTitle:String,public subjects : SkillSubject[]){}
}

export class SkillSubject{
    constructor(public subjectTitle:String = undefined,public imgSrc:String = undefined,public paragraphs:String[]=[], public unorderLists:UnorderList[]=[]){}
}

export class UnorderList{
    constructor(public listTitle:String = undefined, public listContents:String[]){}
}