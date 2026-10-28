---
title: "DNSMadeEasy.com Minor Outage – Keeps me as a customer"
slug: "dnsmadeeasy-com-minor-outage-keeps-me-as-a-customer"
category: "technology"
date: 2011-08-09T04:14:32-07:00
updated: 2012-11-20T18:39:14-07:00
description: "I&rsquo;ve recently been considering GoDaddy.com as a DNS provider. I have 150+ domains registered at GoDaddy.com, and they offer a nice software panel for DNS entries. I&rsquo;ve been using DNSMadeEasy for a very long time, on the recommendation of Tim Heuer, way back in the day. I didn&rsquo;t use"
wpId: 332
---

I’ve recently been considering GoDaddy.com as a DNS provider. I have 150+ domains registered at GoDaddy.com, and they offer a nice software panel for DNS entries. I’ve been using DNSMadeEasy for a very long time, on the recommendation of [Tim Heuer](http://timheuer.com/blog/), way back in the day. I didn’t use GoDaddy from the start, because I wanted to separate my domain registrar from the DNS provider. But I’ve been using, and happy with everything else GoDaddy for a number of years, and I’ve never had any GoDaddy or DNS issues. I pay about $150-$200 a year to DnsMadeEasy.com for all the DNS hosting they do for my domains. I know they have new pricing, but I’m grandfathered in because I’ve had my account for so long.

Anyway, I’m not moving my DNS hosting to GoDaddy. Here’s why. Today, out of the blue, I get an email (copied below) that basically says, our perfect record is now lightly tarnished. What a cool email. To my knowledge, my accounts were not affected, and if they were, none of our customers called, so I don’t think we were affected by the outage. All-in-all the fix took them 6 hours to complete. WOW. These guys are genius smart, all they do is DNS. And if it took them 6 hours, I’m a little afraid of what would happen if a DDoS attack of this scale were to be aimed their competitors, or worse, my Registrar, or other service providers. So for $200 (or less) a year, I’m happy to have the expertise of DNSMadeEasy.com on my side.

And, to boot, they’re offering a refund on all accounts, not even just accounts that can prove they were affected.

Well DNSMadeEasy.com – today you saved a customer, with this service, and you didn’t even know it.

**Good things happen to good companies, who do “the right thing”!**

If you’re looking for DNS Hosting – [I highly recommend DNSMadeEasy.com](http://sc8.me/cVTnNC)

* * *

_Dear DNS Made Easy Client,_

_On August 07, 2010 DNS Made Easy was the target of a large multi Gb/s attack against all of our name servers.   The attack started at 8:00 UTC and was fully mitigated by 14:00 UTC.  During this time period there were regional outages from some or all of our name servers.  Regional outages means that certain regions of the world were not able to resolve your DNS and other regions of the world were resolving normally.  When all name servers were not reachable a DNS query would have been lost, when some name servers were not reachable then DNS performance would have been slower than normal but still operational.  
The regional downtime was in very small periods but it still did affect the overall resolution for all of our client’s DNS.  It is for this reason that we are explaining the situation in full to all of our clients now._

_1) How long were the DNS outages?  
In some regions there were no issues, in other regions  outages lasted a few minutes, while in other regions there were sporadic (up and down) outages for a couple of hours.  In Europe for instance there was never any downtime.  In Asia downtime continued longer than other regions. In United States the west coast was hit much harder and experienced issues longer than the central and east coast._

_2) Many clients have asked us if in fact there was downtime since they did not notice issues.  
Many clients did not notice any DNS downtime.   In fact many clients would not have noticed this issue if we had not sent this email.  But we feel disclosure of this issue is something that we owe our client base. If you want to see if there is a significant loss of DNS queries you can quickly compare your daily queries from this Saturday to last Saturday in the DNS Made Easy control panel.  Overall query statistics comparing this Saturday’s query load (minus attack traffic) to recent Saturdays’ query loads shows that our servers properly responded to a query total this Saturday within a 2% difference from recent Saturdays._

_3) Where did the attack come from?  
We believe that the DDoS came from a botnet attack originating from Asia.  Most attack traffic originated in or transited through China.  The source IPs appear to be mostly spoofed but the vast majority are assigned by APNIC to Chinese Networks and Chinese ISPs.  Traffic levels reported to us by our bandwidth providers regarding their connections through which this traffic entered their networks also points to origins in Asia._

_4) How large of an attack was this?  
This attack hit levels that were so high that our Tier1 upstreams were suffering latency and network issues for other clients at many of their locations due to this attack.  This caused some of our Tier1 bandwidth providers to use their last resort response of null routing traffic to some of our IPs from some networks to prevent major service degradation to their core networks. Measuring the exact size of this attack is rather difficult.  However, discussions with our Tier1 bandwidth providers during the attack led to an estimate of 50 Gb/s in size.  This was based on reports of multiple 10Gb/s lines being saturated at multiple different providers in different geographic regions.  
During our after-action discussions internally and with our providers after the attack was mitigated we analyzed all information available to us through monitoring systems and traffic reports and we revised our estimate of the attack size to be fluctuating between 20Gb/s and 40Gb/s during the attack.  We will never know the true size of this attack as we actively moved traffic around to different locations throughout the attack and IPs were temporarily null routed into and through various networks, and some traffic was blocked from provider to provider in response to the attack. We do know that due to the service implication to the Tier1 providers, networking teams from China Netcom, China Telecom,  Level3, GlobalCrossing, Tiscali, and Arbinet were involved to stop the attacks.  Level3 and Arbinet both played special heroic roles in facilitating that the correct people were involved from all networks to make sure that the attack was stopped as quickly as possible._

_5) How was this attack stopped?  
Fighting attacks of this magnitude is very complex and a full answer involves much information that we do not want these criminals to know.  What we can say is that that we used a combination of routing techniques, DDoS mitigation tools, customized firewalls, and high level inter-provider negotiations.  
China Netcom and China Telecom had to null route the name servers from their networks in order for the attack to not impact other traffic they had going to the United States._

_6) Will an SLA credit be issued?  
Yes it will be.  With thousands paying companies we obviously do not want every organization to submit an SLA form.  Even though not all clients noticed the attack, we plan on issuing an SLA to every single paying DNS account.  
You will be receiving an email about the SLA credit to your account in the next few days._

_7) Does this affect your 100% uptime history?  
Yes, any service outage would result in loss of uptime.  We had a history leading uptime of over 8 years of 100% uptime.  With a calculated two hour outage (which is probably longer than we were actually down for anyone) this DDOS attack put our overall uptime history at a calculated 99.9999%.  This is still an excellent uptime history._

_8) What would it take to get your 100% uptime history back?  
That is mathematically impossible.  But we can work on increasing our 99.9999% uptime history and we will work hard on building another run of more than 8 years of 100% uptime.  We are confident that we can do it and we look forward to the challenge._

_9) Would another DNS provider have been able to stop this attack?  
We are sure that our competitors will claim that the answer is yes.  In fact we have been called by several of our competitors with very amusing phone calls during and after the attack asking us to update our website to say that we no longer have a 100% uptime history (which we have started and will complete soon).  This was a very large attack, so we do not believe that other DNS services could have stopped it either.  If any of our customers are considering leaving our services based on this issue, then we would recommend highly that you request a detailed report for how any new potential DNS provider would deal with an attack of this magnitude.  Please note that this was our first issue of downtime over our 8+ years of providing enterprise managed DNS services._

_10) What is the next step?  
At this time all DNS resolution is functioning as intended from all of our global locations.  
In our 8+ year history, we have had numerous attacks against our services.  Historically we have been able to mitigate these attacks without any service degradation. One thing we have always taken away from every attack is a deeper understanding of what we need to do to make our network and services stronger and more reliable.  
This DDoS attack against us was different from others in that the size was massive enough that our standard mitigation strategies were not sufficient to prevent several network nodes from being flooded.  We now have a deeper understanding of what happened during the attack and have started planning network upgrades and mitigation strategies to help fight these criminals in the future.  It is, and always has been, our commitment to make the DNS Made Easy network the strongest and most reliable DNS network in the world._

_11) Can I pay more for a higher level of service with DNS Made Easy?  
We believe that we provide more service per dollar than any competitor in the DNS industry.  This is why we have the best ROI in the industry.  We do not do this by cutting networking cost.   As many of you aware DNS Made Easy feels we can cut costs by eliminating a lot of the sales (including commissions), presales, and unnecessary marketing expenditures.  
Everyone at DNS Made Easy feels that our network is as strong as or stronger than any competitor in the United States and Europe and you can verify this with speed tests and our highest industry uptime.   As all DNS Made Easy customers know, as our customer base grows, so does our network.  This is how we can continually keep adding to our network and always remain a fraction of the price of our competition.  
You will hear more from our network team as we plan on adding additional precautions to keep everything running smoothly during attacks in the future.  
One thing that I want to say is that we sincerely apologize that this happened to your DNS service.  We understand that hundreds of thousands of domains rely on our DNS services each day to keep their businesses running smoothly.  This is not something that we treat lightly and this is not something that we are going to just let slip away.  We have already started to plan on building a network to focus on preventing attacks like this from causing any service disruption in the future.  
Everyone here at DNS Made Easy would like to thank you for your continued loyalty and kind words during this time.  We can easily say the DNS Made Easy customers are the best in the business.  
_

_Question, comments, concerns?  
Please let us know.  I personally will be answering as many tickets and questions as possible in the following weeks.  Our full DNS Made Easy staff is dedicated to answering your questions and easing any concerns that you have.  
_

_Regards,  
__\-Steven Job  
President and Founder of [DNS Made Easy](http://sc8.me/cVTnNC)_
