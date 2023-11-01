const output = [
	{
		message:
			"There should be 1 and only 1 canonical tag, currently there are 0",
		priority: 100,
		level: "errors",
	},
	{
		message:
			"This title tag is shorter than the recommended minimum limit of 10.",
		priority: 40,
		level: "warnings",
	},
	{
		message:
			"Meta description should include at least 1 of the words in the title tag.",
		priority: 70,
		level: "warnings",
	},
	{
		message:
			"There are h5 tags but no h4 tags. Consider If you can move h5s to h4s.",
		priority: 30,
		level: "warnings",
	},
	{
		message: "H1 tag should have at least 1 word from your title tag.",
		priority: 70,
		level: "warnings",
	},
	{
		message: "None of your h2 tags use a single word from your title tag.",
		priority: 70,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [\n" +
			"\t\t\t\t\t\t\t\t\n" +
			"\t\t\t\t\t\t\t\t\t\n" +
			"\t\t\t\t\t\t\t\t\n" +
			"\t\t\t\t\t\t\t](index.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [Home](index.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [page2](page2.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [Contact](page2.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [Are you ready, contact me](page2.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [Contact](page2.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [](index.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [](index.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [](index.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [](index.html) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [car.com](car.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [pizza.com](pizza.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [myroof.com](myroof.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [realestateseo.com](realestateseo.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [agencydirectory.com](agencydirectory.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [seodirectory.com](seodirectory.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [marketingdirectory.com](marketingdirectory.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [123seo.com](123seo.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [123site.com](123site.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [wordpressdirectory.com](wordpressdirectory.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [agencylistatl.com](agencylistatl.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [bestagencyatl.com](bestagencyatl.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [seolist.com](seolist.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [betterseo.com](betterseo.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [yesseo.com](yesseo.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [seojuicelink.com](seojuicelink.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [bestlinks.com](bestlinks.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [linkalot.com](linkalot.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [backlink.com](backlink.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [linkjuicedirectory.com](linkjuicedirectory.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [rankongoogle.com](rankongoogle.com) does not.",
		priority: 80,
		level: "warnings",
	},
	{
		message:
			"Internal links should include a trailing slash: [trustedseo.com](trustedseo.com) does not.",
		priority: 80,
		level: "warnings",
	},
];
