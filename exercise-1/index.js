    
const start = async() => {
    const url = 'https://5dc588200bbd050014fb8ae1.mockapi.io/assessment';
    var context= {users: []};
    const jsonData = await fetch(url);
    context.users = await jsonData.json();
    console.log(':: context', context);
    let templateScript = document.querySelector('#template').innerHTML;
    let template = Handlebars.compile(templateScript);
    let compiledHtml = template(context);
    document.querySelector('#content').innerHTML = compiledHtml;
    console.log(':: templateScript', compiledHtml);
    // fetch(url).then((res) => res.json()).then(res => context = res, err => console.error(err)); 
    // var theTemplateScript = $("#users-temlplate").html();
    // var theTemplate = Handlebars.compile(theTemplateScript);
    // // Pass our data to the template
    // var theCompiledHtml = theTemplate(context);
    // // Add the compiled html to the page
    // $('.content-placeholder').html(theCompiledHtml);
};

start();

module.exports.start = start;
