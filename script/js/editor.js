export default function createEditor() {
    $(document).ready(function() {
        $('#summernote').summernote({
            tabDisable: true,
            keyMap: {
            pc: {
                'ENTER': 'insertParagraph',
                'CTRL+Z': 'undo',
                'CTRL+Y': 'redo',
                'TAB': 'indent',
                'SHIFT+TAB': 'outdent',
                'CTRL+U': 'underline',
                'CTRL+SHIFT+S': 'strikethrough',
                'CTRL+BACKSLASH': 'removeFormat',
                'CTRL+SHIFT+L': 'justifyLeft',
                'CTRL+SHIFT+E': 'justifyCenter',
                'CTRL+SHIFT+R': 'justifyRight',
                'CTRL+SHIFT+J': 'justifyFull',
                'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                'CTRL+SHIFT+NUM8': 'insertOrderedList',
                'CTRL+NUM0': 'formatPara',
                'CTRL+NUM1': 'formatH1',
                'CTRL+NUM2': 'formatH2',
                'CTRL+NUM3': 'formatH3',
                'CTRL+NUM4': 'formatH4',
                'CTRL+NUM5': 'formatH5',
                'CTRL+NUM6': 'formatH6',
                'CTRL+ENTER': 'insertHorizontalRule',
                'CTRL+K': 'showLinkDialog'
            }
        },
            toolbar: [
                ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
                ['font', ['superscript', 'subscript']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['fontname', ['Arial']],
                ['picture', ['picture']],
                ['table', ['table']],
                ['hr', ['hr']],
                ['undo', ['undo']],
                ['redo', ['redo']],
                ['help', ['help']],
                ['codeview', ['codeview']]
            ],
            popover: {
                table: [
                    ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                    ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
                    ['merge', ['jMerge']],
                    ['delete', ['jWidthHeightReset', 'deleteTable']],
                ]
            },
            jTable : {
                /**
                 * drag || dialog
                 */
                mergeMode: 'drag'
            }
        });
    });
}
