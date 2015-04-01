jeditable.farbtastic
====================

Add the power of farbtastic to jeditable.

Usage
=====

1. Install Jeditable: http://www.appelsiini.net/projects/jeditable
2. Install farbtastic: https://github.com/mattfarina/farbtastic
3. Add the code below to your javascript
4. Use like this:
```javascript
$('p').editable('/edit', {
    type: 'farbtastic',
    cancel: 'Cancel'
    submit: 'OK'
});
```

Upon clicking on the <p>, it's content will be replaced by a farbtastic colorpicker.

Datatables Integration
======================

If you use jeditable editor for DataTables you can add the power of farbtastic in a simple ammern:

```javascript
$("#table").dataTable({}).makeEditable({
    "aoColumns": [
        // other columuns...
        {
            type: 'farbtastic',
            cancel: 'Cancel',
            submit: 'OK'
        }
        // others
    ]
});
```
