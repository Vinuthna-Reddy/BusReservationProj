
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
    
public partial class Guest
{

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public Guest()
    {

        this.Bookings = new HashSet<Booking>();

        this.payments = new HashSet<payment>();

    }


    public int Guest_ID { get; set; }

    public string name { get; set; }

    public string email_id { get; set; }

    public Nullable<decimal> phone_no { get; set; }



    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<Booking> Bookings { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

    public virtual ICollection<payment> payments { get; set; }

}

}
