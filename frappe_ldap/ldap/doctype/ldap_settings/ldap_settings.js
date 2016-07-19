frappe.ui.form.on("LDAP Settings", "ldap_syncnow", function(frm) {
  frappe.call({
    method: "frappe_ldap.LDAP_settings.ldap_connect1",
    callback: function(r) { }
  })
});
