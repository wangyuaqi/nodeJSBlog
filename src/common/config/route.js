module.exports = [

    [/^admin\/content\/article\/(\d+)$/,"admin/content/article?id=:1"],
    [/^admin\/tag\/item\/(\d+)$/,"admin/tag/item?id=:1"],
    [/^admin\/topictag\/item\/(\d+)$/,"admin/topictag/item?id=:1"],
    [/^admin\/item\/item\/(\d+)$/,"admin/item/item?id=:1"],
    [/^admin\/role\/item\/(\d+)$/,"admin/role/item?id=:1"],
    [/^admin\/pertag\/item\/(\d+)$/,"admin/pertag/item?id=:1"],
    [/^admin\/role\/perlist\/(\d+)$/,"admin/role/perlist?id=:1"],
    [/^admin\/permission\/item\/(\d+)$/,"admin/permission/item?id=:1"],
    [/^admin\/menu\/item\/(\d+)$/,"admin/menu/item?id=:1"],
    [/^admin\/user\/item\/(\d+)$/,"admin/user/item?id=:1"],
    [/^category\/(\d+)$/,"home/index/category?id=:1"],
    [/^admin\/taglist\/edit\/(\d+)$/,"admin/taglist/edit?id=:1"],
    [/^page\/(\d+)$/,"home/index/page?aid=:1"],
    [/^topic\/item\/(\d+)$/,"topic/index/item?tid=:1"],
    [/^topic\/edit\/(\d+)$/,"topic/index/edit?tid=:1"],
    [/^topic\/all\/(\d+)$/,"topic/index?tab=all&page=:1&pagesize=20"],
    [/^topic\/ask\/(\d+)$/,"topic/index?tab=ask&page=:1&pagesize=20"],
    [/^topic\/share\/(\d+)$/,"topic/index?tab=share&page=:1&pagesize=20"],
    [/^topic\/job\/(\d+)$/,"topic/index?tab=job&page=:1&pagesize=20"],
    [/^activity\/(\d+)$/,"home/index/activity?page=:1&pagesize=10"],

    [/^topic\/create\/edit\/(\d+)$/,"topic/create/edit?tid=:1"],
    [/^topic\/(\w+)$/,"topic/index?tab=:1"],
    [/^doc\/thinkjs2\/(\d+)$/,"doc/index/thinkjs2?aid=:1"],
    [/^doc\/thinkjs\/(\d+)$/,"doc/index/thinkjs?aid=:1"],
    [/^doc\/liblog\/(\d+)$/,"doc/index/liblog?aid=:1"],
    [/^doc\/angular\/(\d+)$/,"doc/index/angular?aid=:1"],
    [/^doc\/react\/(\d+)$/,"doc/index/react?aid=:1"],
    [/^page\/(\d+)\/(\d+)$/,"home/index/page?aid=:1&pid:1"],
    [/^preview\/(\d+)$/,"home/index/preview?aid=:1"],
    [/^preview\/(\d+)\/(\d+)$/,"home/index/preview?aid=:1&pid:1"],
    [/^personal\/@(\w+)$/,"personal/index?uname=:1"],
    [/^forgetcomplete\/code=(\w+)$/,"login/forgetcomplete?uuidCode=:1"],
    [/^activateuser\/code=(\w+)$/,"register/activateuser?uuidCode=:1"],
    [/^admin\/login$/,"home/admin/login"],
    [/^admin\/redirect$/,"home/admin/redirect"],
    ["links", "home/index/links"],
    ["guest", "home/index/guest"],
    ["nodejsblog", "home/index/nodejsblog"],
    ["about", "home/index/about"],
    ["sitemap.xml", "home/index/sitemap"],
    ["donate", "home/index/donate"],
    ["ads", "home/index/ads"],
    ["copyright", "home/index/copyright"],
    ["policy", "home/index/policy"],
    ["activity", "home/index/activity"],
    [/^download\/(\d+)$/,"home/index/download?page=:1&pagesize=10"],
    ["download", "home/index/download"],
    [/^node\/(\d+)\/(\d+)$/,"home/index/node?page=:1&pagesize=10"],
    ["node", "home/index/node"],
    [/^news\/(\d+)$/,"home/index/news?page=:1&pagesize=10"],
    ["news", "home/index/news"],
    [/^more\/(\d+)$/,"home/index/more?page=:1&pagesize=10"],
    ["more", "home/index/more"],
    [/^others\/(\d+)$/,"home/index/others?page=:1&pagesize=10"],
    ["others", "home/index/others"],
    [/^jobs\/(\d+)$/,"home/index/jobs?page=:1&pagesize=10"],
    ["jobs", "home/index/jobs"],
    [/^category\/(\d+)\/(\d+)$/, "home/index/category?id=:1&page=:2&pagesize=10"]
]
