Ext.define("TCSRV.model.tipointervencion.TipoIntervencionModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" },
    { name: "nombre", type: "string" },
  ],

  idProperty: "id",
});
