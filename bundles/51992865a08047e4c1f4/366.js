"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[366],{"./node_modules/matrix-react-sdk/src/async-components/views/dialogs/security/CreateKeyBackupDialog.tsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=s("./node_modules/react/index.js"),r=s("./node_modules/matrix-js-sdk/src/logger.ts"),c=s("./node_modules/matrix-react-sdk/src/MatrixClientPeg.ts"),i=s("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),o=s("./node_modules/matrix-react-sdk/src/SecurityManager.ts"),l=s("./node_modules/matrix-react-sdk/src/components/views/elements/Spinner.tsx"),u=s("./node_modules/matrix-react-sdk/src/components/views/dialogs/BaseDialog.tsx"),d=s("./node_modules/matrix-react-sdk/src/components/views/elements/DialogButtons.tsx"),p=function(e){return e.BackingUp="backing_up",e.Done="done",e}(p||{});class h extends n.PureComponent{constructor(e){super(e),(0,a.A)(this,"createBackup",(async()=>{this.setState({error:void 0});const e=c.J.safeGet();try{await e.hasSecretStorageKey()?await(0,o.J6)((async()=>{const t=e.getCrypto();if(!t)throw new Error("End-to-end encryption is disabled - unable to create backup.");await e.secretStorage.get("m.megolm_backup.v1"),await t.resetKeyBackup()})):await(0,o.cb)((async()=>{})),this.setState({phase:p.Done})}catch(e){r.v.error("Error creating key backup",e),this.setState({error:!0})}})),(0,a.A)(this,"onCancel",(()=>{this.props.onFinished(!1)})),(0,a.A)(this,"onDone",(()=>{this.props.onFinished(!0)})),this.state={phase:p.BackingUp,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1}}componentDidMount(){this.createBackup()}renderBusyPhase(){return n.createElement("div",null,n.createElement(l.A,null))}renderPhaseDone(){return n.createElement("div",null,n.createElement("p",null,(0,i._t)("settings|key_backup|backup_in_progress")),n.createElement(d.A,{primaryButton:(0,i._t)("action|ok"),onPrimaryButtonClick:this.onDone,hasCancel:!1}))}titleForPhase(e){switch(e){case p.BackingUp:return(0,i._t)("settings|key_backup|backup_starting");case p.Done:return(0,i._t)("settings|key_backup|backup_success");default:return(0,i._t)("settings|key_backup|create_title")}}render(){let e;if(this.state.error)e=n.createElement("div",null,n.createElement("p",null,(0,i._t)("settings|key_backup|cannot_create_backup")),n.createElement(d.A,{primaryButton:(0,i._t)("action|retry"),onPrimaryButtonClick:this.createBackup,hasCancel:!0,onCancel:this.onCancel}));else switch(this.state.phase){case p.BackingUp:e=this.renderBusyPhase();break;case p.Done:e=this.renderPhaseDone()}return n.createElement(u.A,{className:"mx_CreateKeyBackupDialog",onFinished:this.props.onFinished,title:this.titleForPhase(this.state.phase),hasCancel:[p.Done].includes(this.state.phase)},n.createElement("div",null,e))}}}}]);
//# sourceMappingURL=366.js.map