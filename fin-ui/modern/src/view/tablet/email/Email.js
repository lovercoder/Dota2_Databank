Ext.define('Admin.view.tablet.email.Email', {
    extend: 'Ext.Container',

    requires: [
        'Ext.dataview.DataView',
        'Ext.Panel',
        'Ext.plugin.Responsive'
    ],

    controller: 'email-tablet',
    viewModel: {
        type: 'email'
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    listeners: {
        element: 'element',
        edgeswipeend: 'onSwipe'
    },

    margin: '20 0 0 20',

    items: [
        {
            xtype: 'container',
            userCls: 'email-controls',
            reference: 'controls',
            plugins: 'responsive',
            responsiveConfig: {
                'width < 1000': {
                    hidden: true
                },
                'width >= 1000': {
                    hidden: false
                }
            },

            items: [
                {
                    xtype: 'panel',
                    title: 'Email',
                    ui: 'light',
                    bodyBorder: true,
                    header: {
                        userCls: 'email-toolbox'
                    },
                    userCls: 'email-controls-box shadow',
                    iconCls: 'x-fa fa-inbox',
                    defaultType: 'button',
                    layout: 'vbox',

                    items: [{
                        text: 'Compose',
                        ui: 'launch',
                        iconAlign: 'left',
                        textAlign: 'left',
                        iconCls: 'x-fa fa-edit',
                        handler: 'onComposeMessage'
                    },{
                        text: 'Inbox',
                        ui: 'launch',
                        iconAlign: 'left',
                        textAlign: 'left',
                        itemId: 'inbox',
                        iconCls: 'x-fa fa-inbox',
                        handler: 'onChangeFilter'
                    },{
                        text: 'Sent Mail',
                        ui: 'launch',
                        iconAlign: 'left',
                        textAlign: 'left',
                        itemId: 'sent',
                        iconCls: 'x-fa fa-check-circle',
                        handler: 'onChangeFilter'
                    },{
                        text: 'Spam',
                        ui: 'launch',
                        iconAlign: 'left',
                        textAlign: 'left',
                        itemId: 'spam',
                        iconCls: 'x-fa fa-exclamation-circle',
                        handler: 'onChangeFilter'
                    },{
                        text: 'Trash',
                        ui: 'launch',
                        iconAlign: 'left',
                        textAlign: 'left',
                        itemId: 'trash',
                        iconCls: 'x-fa fa-trash-o',
                        handler: 'onChangeFilter'
                    }]
                },
                {
                    xtype: 'panel',
                    title: 'Friends',
                    ui: 'light',
                    bodyBorder: true,
                    header: {
                        userCls: 'email-toolbox'
                    },
                    userCls: 'friends-list email-controls-box shadow',
                    iconCls: 'x-fa fa-group',
                    items: [{
                        xtype: 'list',
                        bind: '{friends}',
                        itemConfig: {
                            xtype: 'button',
                            ui: 'presence',
                            iconAlign: 'right',
                            textAlign: 'left',
                            viewModel: true,
                            handler: 'onComposeTo',
                            tpl: null,
                            bind: {
                                userCls: '{record.online:pick("offline","online")}',
                                text: '{record.name}'
                            }
                        }
                    }]
                }
            ]
        },
        {
            xtype: 'inbox',
            margin: '0 20 20 0',
            flex: 1,
            bind: '{inbox}'
        }
    ]
});