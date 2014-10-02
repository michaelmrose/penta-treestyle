// group.mappings.add([modes.NORMAL], [',tko'],
//     'kill other trees',
//     function() CommandExMode().open('closeothertrees')
// );

group.commands.add(['closeother[trees]'],
    'closes all trees except for current',
    function(args) {
       TreeStyleTabService.removeAllTabsBut(gBrowser.mCurrentTab) 
    }, {
        argCount: '?'
    }
);

function closeothertrees() {
       TreeStyleTabService.removeAllTabsBut(gBrowser.mCurrentTab) 
};

group.commands.add(['closetree'],
    'closes current tree',
    function(args) {
      TreeStyleTabService.removeTabSubtree(gBrowser.mCurrentTab)
    }, {
        argCount: '?'
    }
);

group.commands.add(['demote'],
    'demotes current tab to child of tab above',
    function(args) {
          gBrowser.treeStyleTab.demoteCurrentTab()
    }, {
        argCount: '?'
    }
);

group.commands.add(['promote'],
    'promotes current tab',
    function(args) {
      gBrowser.treeStyleTab.promoteCurrentTab()
    }, {
        argCount: '?'
    }
);

group.commands.add(['toggletree'],
    'toggles expansion of tab tree',
    function(args) {
      gBrowser.treeStyleTab.collapseExpandAllSubtree()
    }, {
        argCount: ''
    }
);
