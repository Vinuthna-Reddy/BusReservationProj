
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace trial.Models
{

using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    [DataContract]
public partial class Registered_User
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public Registered_User()
    {

        this.Bookings = new HashSet<Booking>();

        this.payments = new HashSet<payment>();

    }

        [DataMember]
    public int user_id { get; set; }
        [DataMember]
    public string fname { get; set; }
        [DataMember]
    public string lname { get; set; }
        [DataMember]
    public string username { get; set; }
        [DataMember]
    public string password { get; set; }
        [DataMember]
    public Nullable<decimal> phone_no { get; set; }
        [DataMember]
    public Nullable<decimal> wallet { get; set; }
        [DataMember]
    public string email_id { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<Booking> Bookings { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<payment> payments { get; set; }

}

}