import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent 
{
    // Random list of Israeli cities I found online.
    cities = [ 
        "תל אביב", "ירושלים", "חיפה", "באר שבע", "נתניה", "אשדוד", "ראשון לציון", 
        "חולון", "בת ים", "רמלה", "עכו", "אשקלון", "נצרת", "בית שאן", "מודיעין", 
        "כפר סבא", "רעננה", "אילת", "הרצליה", "פתח תקווה", "עפולה", "צפת", "טבריה", 
        "בני ברק", "רמת גן", "הוד השרון", "קריית גת", "קריית שמונה", "קצרין", 
        "השרון", "לוד", "רמת השרון", "טירת הכרמל", "דימונה", "מעלות תרשיחא", "כפר יונה", 
        "חדרה", "נתיבות", "שדרות", "כוכב יאיר", "ערד", "גבעתיים", "מודיעין עילית", 
        "חולון", "קיבוץ יקום", "הוד השרון"
    ];

}